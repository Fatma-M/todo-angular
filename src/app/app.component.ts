import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'todo-angular';
  mode: string = 'light';

  toggleMode() {
    if (this.mode == 'light') {
      this.mode = 'dark';
    } else {
      this.mode = 'light';
    }
  }
}
