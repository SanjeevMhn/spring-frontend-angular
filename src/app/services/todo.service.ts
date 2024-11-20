import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Todo = {
  taskId: number, 
  taskTitle: string,
  taskBody: string,
  isCompleted: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  http = inject(HttpClient);
  BASE_URL = 'http://localhost:8080/api/';

  constructor() { }

  getTodos(): Observable<any>{
    return this.http.get(this.BASE_URL);
  }
}
