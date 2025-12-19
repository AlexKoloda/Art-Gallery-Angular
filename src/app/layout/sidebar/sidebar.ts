import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button';
import { ModalService } from '../../services/modal.service';
import { ICategory } from '../../models/category.model';
import { ViewportService } from '../../services/viewport';
import { AsyncPipe, NgClass } from '@angular/common';
import { SidebarToggleService } from '../../services/sidebar-toggle';
import { Dialog } from '../../shared/dialog/dialog';
import { ActivityLogModal } from '../../pages/home/activity-log-modal/activity-log-modal';

@Component({
  selector: 'app-sidebar',
  imports: [ButtonComponent, NgClass, AsyncPipe, Dialog, ActivityLogModal],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input() categories!: ICategory[] | [];
  @Output() addCategory = new EventEmitter<void>();
  @Output() categorySelect = new EventEmitter<number | null>();
  sidebarState = inject(SidebarToggleService);

  isOpen$ = this.sidebarState.isOpen$;

  constructor(private modalService: ModalService, private viewport: ViewportService) {}

  get isMobile(): boolean {
    return this.viewport.isMobile;
  }

  closeMobileSidebar() {
    this.sidebarState.close();
  }

  onAddCategoryClick() {
    this.addCategory.emit();
  }

  openActivityLogModal() {
    this.modalService.open('activityLogModal');
  }

  closeActivityModal() {
    this.modalService.close('activityLogModal');
  }

  isModalOpen(name: string): boolean {
    return this.modalService.isOpen(name);
  }

  selectAll() {
    this.categorySelect.emit(null);
  }

  selectCategory(id: number) {
    this.categorySelect.emit(id);
    this.sidebarState.close();
  }
}
