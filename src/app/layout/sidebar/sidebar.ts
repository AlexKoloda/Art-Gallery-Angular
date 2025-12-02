import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button';
import { Dialog } from '../../shared/dialog/dialog';
import { AddCategoryForm } from '../../pages/home/add-category-form/add-category-form';
import { ModalService } from '../../services/modal';
import { ActivityLogModal } from '../../pages/home/activity-log-modal/activity-log-modal';

@Component({
  selector: 'app-sidebar',
  imports: [ButtonComponent, Dialog, AddCategoryForm, ActivityLogModal],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  constructor(private modalService: ModalService) {}

  isModalOpen(modalName: string): boolean {
    return this.modalService.isOpen(modalName);
  }

  openModal(modalName: string) {
    console.log('Opening modal:', modalName);
    this.modalService.open(modalName);
    console.log('After opening - is open:', this.modalService.isOpen(modalName));
  }

  closeModal(modalName: string) {
    this.modalService.close(modalName);
  }
}
