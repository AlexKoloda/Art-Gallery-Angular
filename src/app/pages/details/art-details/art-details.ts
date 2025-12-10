import { IArt } from '../../../models/art.model';
import { Router } from '@angular/router';
import { Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Rating } from '../../../shared/rating/rating';
@Component({
  selector: 'app-art-details',
  imports: [Rating],
  templateUrl: './art-details.html',
  styleUrl: './art-details.scss',
})
export class ArtDetails implements OnInit {
  @Output() currentArtId = new EventEmitter<number>();
  currentArt: IArt | undefined;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.currentArt = history.state.art;

      if (!this.currentArt) {
        console.error('Arts not found in history');
        this.router.navigate(['/']);
      }
      this.currentArtId.emit(this.currentArt?.id);
    } else {
      return;
    }
  }
}
