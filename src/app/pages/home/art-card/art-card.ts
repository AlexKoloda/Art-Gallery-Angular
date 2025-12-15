import { Component, Input } from '@angular/core';
import { IArt } from '../../../models/art.model';
import { Rating } from '../../../shared/rating/rating';
import { Paper } from '../../../shared/paper/paper';

@Component({
  selector: 'app-art-card',
  imports: [Rating, Paper],
  templateUrl: './art-card.html',
  styleUrl: './art-card.scss',
})
export class ArtCard {
  @Input()
  art!: IArt;

  get ratings() {
    if (!this.art.ratings || this.art.ratings.length === 0) {
      return [];
    }
    return this.art.ratings;
  }
}
