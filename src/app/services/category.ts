import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.model';
import { TAddCategoryDto } from '../pages/home/add-category-form/add-category-form';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchAllCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.apiUrl}api/Category`);
  }

  postNewCategory(category: TAddCategoryDto): Observable<ICategory> {
    return this.http.post<ICategory>(`${this.apiUrl}api/Category`, category);
  }
}
