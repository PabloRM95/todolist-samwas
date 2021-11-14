import { Injectable } from '@angular/core';
import { TODO } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  url: string = "https://jsonplaceholder.typicode.com/todos"

  getAll (): Promise<TODO[]> {
    return fetch(this.url)
    .then(res => res.json())
  }

}
