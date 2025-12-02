import { Component } from '@angular/core';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { ArtGrid } from './art-grid/art-grid';
import { Pagination } from '../../shared/pagination/pagination';
import { ButtonComponent } from '../../shared/button/button';

import { Dialog } from '../../shared/dialog/dialog';
import { AddArtForm } from './add-art-form/add-art-form';

@Component({
  selector: 'app-home',
  imports: [Sidebar, ArtGrid, Pagination, ButtonComponent, Dialog, AddArtForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  isAddArtModalOpen = false;

  openArtModal() {
    this.isAddArtModalOpen = true;
  }

  closeArtModal() {
    this.isAddArtModalOpen = false;
  }
}
