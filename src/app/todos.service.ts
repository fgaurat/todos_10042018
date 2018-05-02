import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Todo } from './todo';

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) {
  }


  getTodos(): Observable<Todo[]> {
      return this.http.get<Todo[]>(environment.url_todos);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const url = `${environment.url_todos}/${todo.id}`;
    return this.http.delete(url);
  }
}
