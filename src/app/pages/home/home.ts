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
import { error } from 'console';

type Mode = 'all' | 'category';

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
  categories$!: Observable<ICategory[]>;

  mode: Mode = 'all';

  allArts: IArt[] = [];
  arts: IArt[] = [];
  categoryName: string = 'All categories';

  pageSize = 4;
  currentPage = 1;
  totalPages = 1;

  currentCategoryId: number | null = null;

  isAddArtModalOpen = false;
  isAddCategoryModalOpen = false;

  constructor(private artService: ArtService, private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories$ = this.categoryService.fetchAllCategory();
    this.loadAllArts();
  }

  loadAllArts() {
    this.mode = 'all';
    this.currentCategoryId = null;

    this.artService.fetchAllArts().subscribe((arts) => {
      this.allArts = arts;
      this.totalPages = Math.max(1, Math.ceil(this.allArts.length / this.pageSize));
      this.setPageOnClient(1);
    });
  }

  private setPageOnClient(page: number) {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.arts = this.allArts.slice(start, end);
  }

  private loadCategoryPage(categoryId: number, page: number) {
    this.mode = 'category';
    this.currentCategoryId = categoryId;
    this.currentPage = page;

    this.artService.fetchArtsByCategoryPage(categoryId, page, this.pageSize).subscribe({
      next: (arts) => {
        this.arts = arts;
        this.totalPages = arts.length < this.pageSize ? page : page + 1;
      },
      error: (err) => {
        console.error('Error loads arts:', err);
        this.arts = [];
      },
    });
  }

  loadCategoryName(categoryId: number) {
    this.categoryService.fetchCurrentCategory(categoryId).subscribe((category) => {
      this.categoryName = category.name;
    });
  }

  onPageChange(page: number) {
    if (this.mode === 'all') {
      this.setPageOnClient(page);
    } else if (this.mode === 'category' && this.currentCategoryId !== null) {
      this.loadCategoryPage(this.currentCategoryId, page);
    }
  }

  onCategorySelect(categoryId: number | null) {
    if (categoryId === null) {
      this.loadAllArts();
    } else {
      this.loadCategoryPage(categoryId, 1);
      this.loadCategoryName(categoryId);
    }
  }

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
