import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IRating, TRatingAdd } from '../models/rating.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchCurrentRating(artId: number): Observable<IRating[]> {
    return this.http.get<IRating[]>(`${this.apiUrl}api/Rating/get-ratings-by-item/${artId}`);
  }

  postArtRating(ratingDto: TRatingAdd): Observable<IRating> {
    return this.http.post<IRating>(`${this.apiUrl}api/Rating/`, ratingDto);
  }
}
