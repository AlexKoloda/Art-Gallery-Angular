import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Search } from '../../shared/search/search';

@Component({
  selector: 'app-header',
  imports: [RouterModule, Search],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
