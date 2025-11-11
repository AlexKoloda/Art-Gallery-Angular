import { Component } from '@angular/core';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { ArtGrid } from './art-grid/art-grid';
import { Pagination } from '../../shared/pagination/pagination';
import { ButtonComponent } from '../../shared/button/button';

@Component({
  selector: 'app-home',
  imports: [Sidebar, ArtGrid, Pagination, ButtonComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
