import { Component, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todoService = inject(TodoService);
  todos$ = this.todoService.getTodos();
}
