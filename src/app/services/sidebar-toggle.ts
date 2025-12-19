import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarToggleService {
  private openSubject = new BehaviorSubject(false);

  isOpen$ = this.openSubject.asObservable();

  open() {
    this.openSubject.next(true);
  }

  close() {
    this.openSubject.next(false);
  }

  toggle() {
    this.openSubject.next(!this.openSubject.value);
  }
}
