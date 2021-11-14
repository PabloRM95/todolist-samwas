import { Injectable } from '@angular/core';
import { TODO } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getAll(): Promise<TODO[]>{
    return fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
  }
}
