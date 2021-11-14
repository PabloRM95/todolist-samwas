import { Component, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';
import { TODO } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-gay',
  templateUrl: './todo-gay.component.html',
  styleUrls: ['./todo-gay.component.css'],
})
export class TodoGayComponent implements OnInit {
  constructor(private TodoService: TodoService) {}

  textGay: string = '';
  listaGay: TODO[] = [];

  ngOnInit(): void {
    this.TodoService.getAll().then((res: TODO[]) => (this.listaGay = res));
  }

  /* addNewTask() {
    let newTask: TODO = {
      title: this.textGay,
      id: nanoid(),
      completed: false,
      date: Date.now()
    }
    this.listaGay.push(newTask);
    this.textGay = '';
  }

  deleteTask(id: string) {
    this.listaGay.filter(task => task.id != id);
  } */
}