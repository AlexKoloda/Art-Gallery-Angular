import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ArtDetails } from './art-details/art-details';
import { IComment } from '../../models/comment.model';
import { Comment } from '../../shared/comment/comment';
import { CommentForm } from './comment-form/comment-form';
import { Observable } from 'rxjs';
import { CommentService } from '../../services/comment.service';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [ArtDetails, Comment, CommentForm, AsyncPipe],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details implements OnInit {
  artId!: number;
  comments$: Observable<IComment[]> | undefined;

  constructor(
    private commentService: CommentService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  onCommentCreated() {
    this.comments$ = this.commentService.fetchCommentsById(this.artId);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const art = history.state.art;
      this.artId = art.id;
      this.comments$ = this.commentService.fetchCommentsById(this.artId);
    }
  }
}
