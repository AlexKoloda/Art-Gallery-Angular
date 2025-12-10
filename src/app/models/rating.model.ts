import { IArt } from './art.model';

export interface IRating {
  id: number;
  createDate: string;
  updateDate: string;
  ratingValue: number;
  itemId: number;
  item: IArt;
}
