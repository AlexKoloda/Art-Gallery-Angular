import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button';
import { ModalService } from '../../services/modal';
import { ICategory } from '../../models/category.model';

@Component({
  selector: 'app-sidebar',
  imports: [ButtonComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input() categories!: ICategory[] | [];
  @Output() addCategory = new EventEmitter<void>();

  constructor(private modalService: ModalService) {}

  onAddCategoryClick() {
    this.addCategory.emit();
  }

  clickCategory(categoryName: string) {
    // TODO: Need fetch current category art from API
  }
}
