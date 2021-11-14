import { Component, OnInit } from '@angular/core';
import { TODO } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-gay',
  templateUrl: './todo-gay.component.html',
  styleUrls: ['./todo-gay.component.css']
})
export class TodoGayComponent implements OnInit {

  textGay: string = '';
  listaGay: TODO[] = [];

  constructor(private TodoService: TodoService) { }

  ngOnInit(): void {
    this.TodoService.getAll().then((res: TODO[]) => res = this.listaGay)
  }

  

}
