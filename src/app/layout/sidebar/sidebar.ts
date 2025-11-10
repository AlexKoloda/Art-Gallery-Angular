import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button';

@Component({
  selector: 'app-sidebar',
  imports: [ButtonComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {}
