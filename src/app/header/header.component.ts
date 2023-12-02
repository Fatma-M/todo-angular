import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() mode!: string;
  @Output() toggle = new EventEmitter<void>();

  changeToggle() {
    this.toggle.emit();
  }
}
