import { Injectable } from '@angular/core';
import axios from 'axios';
import { TODO } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  url: string = 'https://jsonplaceholder.typicode.com/todos';

  getAll(): Promise<TODO[]> {
    return fetch(this.url).then((res) => res.json());
  }

  deleteOne(id: string) {
    return axios
      .delete(`${this.url}/${id}`)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }

  createOne(newTask: TODO) {
    return axios
      .post(this.url, newTask)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }
  modifyOne(newTask: TODO) {
    return axios
      .patch(`${this.url}/${newTask.id}`)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }
}
