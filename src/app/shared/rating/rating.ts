import { Component, Input, SimpleChanges } from '@angular/core';
import { IRating } from '../../models/rating.model';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
})
export class Rating {
  @Input() ratings: IRating[] = [];

  get averageRating() {
    if (!this.ratings || this.ratings.length === 0) {
      return 0;
    }
    return (
      this.ratings.reduce((total, rating) => total + rating.ratingValue, 0) / this.ratings.length
    );
  }

  stars = [1, 2, 3, 4, 5];
}
