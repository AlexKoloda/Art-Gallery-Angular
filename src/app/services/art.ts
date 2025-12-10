import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArt } from '../models/art.model';
import { environment } from '../../environments/environment';
import { TAddArtDto } from '../pages/home/add-art-form/add-art-form';

@Injectable({
  providedIn: 'root',
})
export class ArtService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchAllArts(): Observable<IArt[]> {
    return this.http.get<IArt[]>(`${this.apiUrl}api/Item`);
  }

  fetchCurrentArt(id: string): Observable<IArt> {
    return this.http.get<IArt>(`${this.apiUrl}api/Item${id}`);
  }

  postNewArt(art: TAddArtDto): Observable<IArt> {
    return this.http.post<IArt>(`${this.apiUrl}api/Item`, art);
  }
}
