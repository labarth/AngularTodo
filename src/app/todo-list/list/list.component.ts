import { Component } from '@angular/core';
import { TodoListService } from 'app/services/todo-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {
  constructor(private todoListService: TodoListService) {}
}
