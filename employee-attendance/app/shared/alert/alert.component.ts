import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  //Variables
  @Input() id: string;
  @Output() close = new EventEmitter<void>();

  //Function to close alert box.
  onClose() {
    this.close.emit();
  }
}
