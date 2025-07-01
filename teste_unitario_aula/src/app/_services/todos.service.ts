import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Todo } from '../_models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  baseUrl = environment.api_url;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl + 'todos')
      .pipe(
        map((response: any) => {
          return response;
        }));
  }

  getById(id: number) {
    return this.http.get<Todo>(this.baseUrl + 'todos/' + id)
      .pipe(
        map((response: any) => {
          return response;
        }));
  }
}
