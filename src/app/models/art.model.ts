import { ICategory } from './category.model';
import { IComment } from './comment.model';
import { IRating } from './rating.model';

export interface IArt {
  id: string;
  createDate: string;
  updateDate: string;
  name: string;
  description: string;
  author: string;
  price: number;
  location: number;
  categoryId: number;
  pictureUrl: string;
  miniPictureUrl: string;
  ratings: IRating[];
  comments: IComment[];
  category: ICategory;
}
