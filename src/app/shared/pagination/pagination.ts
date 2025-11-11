import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.scss'],
})
export class Pagination {
  // TODO: Test number, replace for API Data later.
  @Input() currentPage: number = 1;
  totalPages: number = 3;

  pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

  setTotalPages(numberOfPages: number) {
    this.totalPages = numberOfPages;
    this.pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  }
}
