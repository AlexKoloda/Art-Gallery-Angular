import { Component } from '@angular/core';
import { ArtDetails } from './art-details/art-details';
import { IComment } from '../../models/comment.model';
import { Comment } from '../../shared/comment/comment';
import { CommentForm } from './comment-form/comment-form';

//TODO: test comment array, replace with API data in feat.
const TEST_COMMENT_ARRAY: IComment[] = [
  { id: 1, value: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.' },
  { id: 1, value: 'Lorem ipsum.' },
  {
    id: 1,
    value:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus.',
  },
];

@Component({
  selector: 'app-details',
  imports: [ArtDetails, Comment, CommentForm],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  comments: IComment[] = TEST_COMMENT_ARRAY;
}
