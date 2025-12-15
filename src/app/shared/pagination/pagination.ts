import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.scss'],
})
export class Pagination {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    if (page === this.currentPage) {
      return;
    }

    this.pageChange.emit(page);
  }

  goPrev() {
    this.goToPage(this.currentPage - 1);
  }

  goNext() {
    this.goToPage(this.currentPage + 1);
  }
}
