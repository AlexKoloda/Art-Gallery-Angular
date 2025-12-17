import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment, ICommentDto } from '../models/comment.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchAllComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.apiUrl}api/Comment`);
  }

  fetchCommentsById(artId: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.apiUrl}api/Comment/get-comments-by-item/${artId}`);
  }

  postNewComment(comment: ICommentDto): Observable<IComment> {
    return this.http.post<IComment>(`${this.apiUrl}api/Comment`, comment);
  }
}
