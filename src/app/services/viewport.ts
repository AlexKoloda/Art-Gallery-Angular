import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  isMobile = false;

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }
    this.isMobile = window.innerWidth < 768;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    });
  }
}
