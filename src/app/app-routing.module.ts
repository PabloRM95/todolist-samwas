import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoGayComponent } from './components/todo-gay/todo-gay.component';

const routes: Routes = [
  {
    path: '',
    component: TodoGayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
