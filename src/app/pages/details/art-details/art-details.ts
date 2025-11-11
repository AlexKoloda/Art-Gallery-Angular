import { Component } from '@angular/core';
import { IArt } from '../../../models/art.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art-details',
  imports: [],
  templateUrl: './art-details.html',
  styleUrl: './art-details.scss',
})
export class ArtDetails {
  currentArt: IArt | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentArt = history.state.art;

    if (!this.currentArt) {
      //TODO: Download from server function
    }
  }
}
