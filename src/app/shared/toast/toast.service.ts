import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Toast, TToast } from './toast';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private host?: ViewContainerRef;

  registerHost(host: ViewContainerRef) {
    this.host = host;
  }

  show(message: string, type: TToast = 'info', duration: number = 3000) {
    if (!this.host) {
      console.warn('Toast host is not registered');
      return;
    }

    const componentRef: ComponentRef<Toast> = this.host.createComponent(Toast);

    componentRef.instance.message = message;
    componentRef.instance.type = type;

    if (duration > 0) {
      setTimeout(() => {
        componentRef.destroy();
      }, duration);
    }
  }

  success(message: string, duration: number = 3000) {
    this.show(message, 'success', duration);
  }

  error(message: string, duration: number = 3000) {
    this.show(message, 'error', duration);
  }

  info(message: string, duration: number = 3000) {
    this.show(message, 'info', duration);
  }
}
