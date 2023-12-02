import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-items-footer',
  templateUrl: './items-footer.component.html',
  styleUrl: './items-footer.component.css',
})
export class ItemsFooterComponent {
  @Input() counter!: number;
  @Output() setF = new EventEmitter<string>();
  @Output() clear = new EventEmitter<void>();

  selectedFilter: string = 'all';

  setFilter(tab: string) {
    this.selectedFilter = tab;
    this.setF.emit(tab);
  }

  clearCompleted() {
    this.clear.emit();
  }
}
