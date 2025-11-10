import { Component } from '@angular/core';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { ArtGrid } from './art-grid/art-grid';
import { Pagination } from '../../shared/pagination/pagination';

@Component({
  selector: 'app-home',
  imports: [Sidebar, ArtGrid, Pagination],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
