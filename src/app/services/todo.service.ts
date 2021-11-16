import { Injectable } from '@angular/core';
import axios from 'axios';
import { TODO } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  url = 'https://jsonplaceholder.typicode.com/todos';

  getAll(): Promise<TODO[]>{
    return axios.get<TODO[]>(this.url)
    .then(res => res.data)
  }

  createOne(newTask: TODO){
    return axios.post(this.url, newTask)
    .then(res => res.data)
  }

  deleteOne(id: string){
    return axios.delete(`${this.url}/${id}`)
    .then(res => res.data)
  }

  modifyOne(newTask: TODO){
    return axios.patch(`${this.url}/${newTask.id}`, newTask)
  }

}
