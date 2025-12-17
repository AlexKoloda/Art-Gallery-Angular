import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type TToast = 'success' | 'error' | 'info';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast {
  @Input() message: string = '';
  @Input() type: TToast = 'info';

  get icon(): string {
    switch (this.type) {
      case 'success':
        return 'assets/icons/success-icon-toast.png';
      case 'error':
        return 'assets/icons/error-icon-toast.png';
      case 'info':
      default:
        return 'assets/icons/info-icon-toast.png';
    }
  }
}
