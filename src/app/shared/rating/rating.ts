import { Component, Input, OnInit } from '@angular/core';
import { IRating } from '../../models/rating.model';
import { RatingService } from '../../services/rating.service';
import { switchMap } from 'rxjs';
import { ToastService } from '../toast/toast.service';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
})
export class Rating implements OnInit {
  ratings: IRating[] = [];
  isRatingLoad = false;

  @Input() artId!: number;
  stars = [1, 2, 3, 4, 5];

  constructor(
    private ratingService: RatingService,
    private toastService: ToastService,
    private errService: ErrorService
  ) {}

  ngOnInit() {
    if (!this.artId) return;
    this.isRatingLoad = true;

    this.ratingService.fetchCurrentRating(this.artId).subscribe({
      next: (fetchRatings) => {
        (this.ratings = fetchRatings), (this.isRatingLoad = false);
      },
      error: (err) => {
        this.toastService.error(this.errService.parseError(err.status));
        this.isRatingLoad = false;
      },
    });
  }

  get averageRating() {
    if (this.ratings.length === 0) return 0;
    const avg = this.ratings.reduce((t, r) => t + r.ratingValue, 0) / this.ratings.length;
    return Math.round(avg * 10) / 10;
  }

  onStarClick(ratingValue: number) {
    this.isRatingLoad = true;
    this.ratingService
      .postArtRating({ ratingValue, itemId: this.artId })
      .pipe(switchMap(() => this.ratingService.fetchCurrentRating(this.artId)))
      .subscribe({
        next: (newRating) => {
          (this.ratings = newRating),
            this.toastService.success('Rating successful applied'),
            (this.isRatingLoad = false);
        },
        error: (err) => {
          this.toastService.error(this.errService.parseError(err.status));
          this.isRatingLoad = false;
        },
      });
  }
}
