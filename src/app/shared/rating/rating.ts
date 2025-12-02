import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
})
export class Rating {
  @Input() ratingValue: number = 0;

  stars = [1, 2, 3, 4, 5];
}
