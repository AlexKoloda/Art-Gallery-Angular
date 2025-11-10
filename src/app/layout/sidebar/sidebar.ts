import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-sidebar',
  imports: [Button],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {}
