import { Component } from '@angular/core';
import { ArtDetails } from './art-details/art-details';

@Component({
  selector: 'app-details',
  imports: [ArtDetails],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {}
