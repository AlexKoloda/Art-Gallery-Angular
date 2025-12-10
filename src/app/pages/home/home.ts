import { Component } from '@angular/core';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { ArtGrid } from './art-grid/art-grid';
import { Pagination } from '../../shared/pagination/pagination';
import { ButtonComponent } from '../../shared/button/button';

import { Dialog } from '../../shared/dialog/dialog';
import { AddArtForm } from './add-art-form/add-art-form';
import { ArtService } from '../../services/art';
import { Observable } from 'rxjs';
import { IArt } from '../../models/art.model';
import { AsyncPipe } from '@angular/common';
import { ICategory } from '../../models/category.model';
import { CategoryService } from '../../services/category';
import { AddCategoryForm } from './add-category-form/add-category-form';

@Component({
  selector: 'app-home',
  imports: [
    Sidebar,
    ArtGrid,
    Pagination,
    ButtonComponent,
    Dialog,
    AddArtForm,
    AsyncPipe,
    AddCategoryForm,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  arts$: Observable<IArt[]>;
  categories$: Observable<ICategory[]>;

  constructor(private artService: ArtService, private categoryService: CategoryService) {
    this.arts$ = this.artService.fetchAllArts();
    this.categories$ = this.categoryService.fetchAllCategory();
  }

  isAddArtModalOpen = false;
  isAddCategoryModalOpen = false;

  openArtModal() {
    this.isAddArtModalOpen = true;
  }

  closeArtModal() {
    this.isAddArtModalOpen = false;
  }

  openCategoryModal() {
    this.isAddCategoryModalOpen = true;
  }

  closeCategoryModal() {
    this.isAddCategoryModalOpen = false;
  }

  onCategoryCreated() {
    this.categories$ = this.categoryService.fetchAllCategory();
    this.closeCategoryModal();
  }
}
