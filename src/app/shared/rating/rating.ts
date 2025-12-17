import { Component, Input, OnInit } from '@angular/core';
import { IRating } from '../../models/rating.model';
import { RatingService } from '../../services/rating.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
})
export class Rating implements OnInit {
  ratings: IRating[] = [];

  @Input() artId!: number;
  stars = [1, 2, 3, 4, 5];

  constructor(private ratingService: RatingService) {}

  ngOnInit() {
    if (!this.artId) return;

    this.ratingService
      .fetchCurrentRating(this.artId)
      .subscribe((ratings) => (this.ratings = ratings));
  }

  get averageRating() {
    if (this.ratings.length === 0) return 0;
    const avg = this.ratings.reduce((t, r) => t + r.ratingValue, 0) / this.ratings.length;
    return Math.round(avg * 10) / 10;
  }

  onStarClick(ratingValue: number) {
    this.ratingService
      .postArtRating({ ratingValue, itemId: this.artId })
      .pipe(switchMap(() => this.ratingService.fetchCurrentRating(this.artId)))
      .subscribe((arr) => (this.ratings = arr));
  }
}
