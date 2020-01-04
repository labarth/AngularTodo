import { Injectable } from '@angular/core';
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

@Injectable()
export class TodoListService {
  list = mockData;
  constructor() { }

  deleteTodo(id: string) {
    this.list = this.list.filter((todo) => todo.id !== id);
  }

  todoCheck(id: string) {
    const todoIdx = this.list.findIndex((obj => obj.id === id));
    this.list[todoIdx].completed = !this.list[todoIdx].completed;
  }
}
