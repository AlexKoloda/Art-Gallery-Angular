import { Component, Input } from '@angular/core';
import { ArtCard } from '../art-card/art-card';
import { IArt } from '../../../models/art.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art-grid',
  imports: [ArtCard],
  templateUrl: './art-grid.html',
  styleUrl: './art-grid.scss',
})
export class ArtGrid {
  @Input() arts!: IArt[] | [];

  constructor(private router: Router) {}

  navigateToDetails(art: any) {
    this.router.navigate(['/details', art.id], {
      state: { art: art },
    });
  }
}
