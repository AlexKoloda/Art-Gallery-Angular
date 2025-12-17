import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals = new Map<string, boolean>();

  open(modalName: string) {
    this.modals.set(modalName, true);
  }

  close(modalName: string) {
    this.modals.set(modalName, false);
  }

  isOpen(modalName: string): boolean {
    return this.modals.get(modalName) || false;
  }
}
