import { IArt } from './art.model';

export interface IComment {
  id: number;
  createDate: string;
  updateDate: string;
  itemId: number;
  commentAuthor: string;
  commentValue: string;
  item: IArt;
}

export interface ICommentDto {
  itemId: number;
  commentAuthor: string;
  commentValue: string;
}
