import { Component } from '@angular/core';
import Todo from '../shared/Todo';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css',
})
export class ItemsListComponent {
  // VARIABLES
  newItem: string = '';
  itemId: number = Math.floor(Math.random() * 100);
  counter: number = 2;
  todos: Todo[] = [];
  UiTodos: Todo[] = [];
  activeTodos: Todo[] = [];
  completedTodos: Todo[] = [];

  // Fetching data when app starts
  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('todosRef')!);
    this.todos = data || this.todos;

    this.activeTodos = JSON.parse(localStorage.getItem('active-todos')!);

    this.completedTodos = JSON.parse(localStorage.getItem('completed-todos')!);

    this.UiTodos = this.todos;
  }

  // Update changes
  ngDoCheck() {
    localStorage.setItem('todosRef', JSON.stringify(this.todos));

    const activeTodos: Todo[] = this.todos.filter((todo) => !todo.completed);
    const completedTodos: Todo[] = this.todos.filter((todo) => todo.completed);

    localStorage.setItem('active-todos', JSON.stringify(activeTodos));
    localStorage.setItem('completed-todos', JSON.stringify(completedTodos));

    this.counter = activeTodos.length;
    this.activeTodos = activeTodos;
    this.completedTodos = completedTodos;
  }

  // Add new Item
  setItem() {
    const newItem: Todo = {
      id: this.itemId++,
      title: this.newItem,
      completed: false,
    };

    if (this.newItem.trim() === '') {
      confirm('please fill the input');
      return;
    }
    this.todos.unshift(newItem);
    this.UiTodos = this.todos;
    this.newItem = '';
  }

  // Remove Item
  removeTodo(id: number) {
    if (confirm('Are you sure?')) {
      this.todos = this.todos.filter((item: Todo) => item.id !== id);
      this.UiTodos = this.todos;
    }
  }

  // Update UI with selected filter
  updateUI(selected: string) {
    if (selected == 'all') {
      this.UiTodos = this.todos;
    }
    if (selected == 'active') {
      this.UiTodos = this.activeTodos;
    }
    if (selected == 'completed') {
      this.UiTodos = this.completedTodos;
    }
  }

  // Clear completed todos
  clearCompleted() {
    if (this.completedTodos.length === 0) {
      confirm('there is no completed Todos');
    } else if (confirm('Delete all completed Todos?')) {
      localStorage.removeItem('completed-todos');
      this.todos = this.activeTodos;
    }
    this.UiTodos = this.activeTodos;
  }
}
