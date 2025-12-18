import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  isMobile = window.innerWidth < 900;

  constructor() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    });
  }
}
