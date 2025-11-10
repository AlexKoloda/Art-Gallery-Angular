import { Component, Input } from '@angular/core';
import { IArt } from '../../models/art.model';
import { Rating } from '../rating/rating';

@Component({
  selector: 'app-art-card',
  imports: [Rating],
  templateUrl: './art-card.html',
  styleUrl: './art-card.scss',
})
export class ArtCard {
  @Input()
  art!: IArt;
}
