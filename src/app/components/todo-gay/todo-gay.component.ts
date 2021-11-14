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
    this.TodoService.getAll().then((res: TODO[]) => {
      this.listaGay = res;
      this.listaGay = this.listaGay.slice(1, 5);
    });
  }

  addNewTask() {
    let newTask: TODO = {
      title: this.textGay,
      id: nanoid(),
      completed: false,
      date: Date.now(),
    };
    if(this.textGay.length != 0){this.TodoService.createOne(newTask)
      .then((res: TODO[]) => {
        this.listaGay.push(newTask);
        this.textGay = '';
      })
      .catch((e) => e);
  }}

  deleteTask(id: string) {
    this.TodoService.deleteOne(id)
      .then((res: TODO[]) => {
        this.listaGay = this.listaGay.filter((task) => task.id != id);
      })
      .catch((e) => e);
  }
  completedTask(id: string) {
    let task = this.listaGay.find((todo) => todo.id === id) as TODO;
    task.completed = !task.completed;
    this.TodoService.modifyOne(task).then((res: TODO[]) => {
    }).catch((e => e));
  }
  
}
