import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {
  // TODO: Test number, replace for API Data later.
  totalPages: number = 3;
  currentPage: number = 1;

  pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

  setTotalPages(numberOfPages: number) {
    this.totalPages = numberOfPages;
    this.pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  }
}
