import { Component } from '@angular/core';
import { v4 } from 'uuid';

interface ITodoItem {
  id: string;
  title: string;
  completed: boolean;
}

const mockData: Array<ITodoItem> = [
  {
    id: v4(),
    title: 'First item',
    completed: true,
  },
  {
    id: v4(),
    title: 'Second item',
    completed: false,
  },
  {
    id: v4(),
    title: 'Third item',
    completed: false,
  }
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {
  todoList = mockData;
}
