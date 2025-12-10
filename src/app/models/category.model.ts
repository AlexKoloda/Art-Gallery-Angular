import { IArt } from './art.model';

export interface ICategory {
  id: number;
  createdTime: string;
  updatedTime: string;
  name: string;
  description: string;
  items: IArt[];
}
