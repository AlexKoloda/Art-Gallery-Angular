import { Component, Input } from '@angular/core';
import { IComment } from '../../models/comment.model';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.html',
  styleUrl: './comment.scss',
})
export class Comment {
  @Input()
  comment!: IComment;
}
