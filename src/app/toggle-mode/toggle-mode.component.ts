import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-mode',
  templateUrl: './toggle-mode.component.html',
  styleUrl: './toggle-mode.component.css',
})
export class ToggleModeComponent {
  @Input() mode!: string;
  @Output() onToggle = new EventEmitter<void>();

  toggle() {
    this.onToggle.emit();
  }
}
