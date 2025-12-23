import { Component } from '@angular/core';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { ArtGrid } from './art-grid/art-grid';
import { Pagination } from '../../shared/pagination/pagination';
import { ButtonComponent } from '../../shared/button/button';

import { Dialog } from '../../shared/dialog/dialog';
import { AddArtForm } from './add-art-form/add-art-form';

import { Observable } from 'rxjs';
import { IArt } from '../../models/art.model';
import { AsyncPipe, ViewportScroller } from '@angular/common';
import { ICategory } from '../../models/category.model';

import { AddCategoryForm } from './add-category-form/add-category-form';

import { ArtService } from '../../services/art.service';
import { CategoryService } from '../../services/category.service';
import { ToastService } from '../../shared/toast/toast.service';
import { ErrorService } from '../../services/error.service';
import { ModalService } from '../../services/modal.service';
import { ViewportService } from '../../services/viewport';
import { Loading } from '../../shared/loading/loading/loading';

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
    Loading,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  categories$!: Observable<ICategory[]>;

  isPageLoading = true;

  mode: Mode = 'all';

  allArts: IArt[] = [];
  arts: IArt[] = [];
  categoryName: string = 'All categories';

  pageSize = 4;
  currentPage = 1;
  totalPages = 1;

  currentCategoryId: number | null = null;

  constructor(
    private artService: ArtService,
    private categoryService: CategoryService,
    private modalService: ModalService,
    private toastService: ToastService,
    private errService: ErrorService,
    private viewport: ViewportService,
    private scroller: ViewportScroller
  ) {}

  get isMobile(): boolean {
    return this.viewport.isMobile;
  }

  ngOnInit() {
    this.categories$ = this.categoryService.fetchAllCategory();
    this.loadAllArts();
  }

  loadAllArts() {
    this.isPageLoading = true;
    this.mode = 'all';
    this.currentCategoryId = null;

    this.artService.fetchAllArts().subscribe({
      next: (arts) => {
        this.allArts = arts;
        this.totalPages = Math.max(1, Math.ceil(this.allArts.length / this.pageSize));
        this.setPageOnClient(1);
        this.isPageLoading = false;
        this.toastService.success('Arts successful loaded');
      },
      error: (err) => {
        this.toastService.error(this.errService.parseError(err.status));
        this.isPageLoading = false;
        this.arts = [];
      },
    });
  }

  private setPageOnClient(page: number) {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.arts = this.allArts.slice(start, end);
  }

  private loadCategoryPage(categoryId: number, page: number) {
    this.isPageLoading = true;
    this.mode = 'category';
    this.currentCategoryId = categoryId;
    this.currentPage = page;
    this.loadCategoryName(categoryId);

    this.artService.fetchArtsByCategoryPage(categoryId, page, this.pageSize).subscribe({
      next: (arts) => {
        this.arts = arts;
        this.totalPages = arts.length < this.pageSize ? page : page + 1;
        this.isPageLoading = false;
        this.toastService.success(`${this.categoryName} successful loaded`);
      },
      error: (err) => {
        this.isPageLoading = false;
        this.toastService.error(`Arts ${this.errService.parseError(err.status)}`);
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
    this.scrollUp();
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
    this.modalService.open('addArt');
  }

  closeArtModal() {
    this.modalService.close('addArt');
  }

  openCategoryModal() {
    this.modalService.open('categoryModal');
  }

  closeCategoryModal() {
    this.modalService.close('categoryModal');
  }

  isModalOpen(name: string): boolean {
    return this.modalService.isOpen(name);
  }

  onCategoryCreated() {
    this.categories$ = this.categoryService.fetchAllCategory();
    this.closeCategoryModal();
  }

  scrollUp() {
    setTimeout(() => {
      this.scroller.scrollToPosition([0, 0]);
    });
  }
}
