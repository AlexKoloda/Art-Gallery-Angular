import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button';

@Component({
  selector: 'app-comment-form',
  imports: [ButtonComponent],
  templateUrl: './comment-form.html',
  styleUrl: './comment-form.scss',
})
export class CommentForm {}
