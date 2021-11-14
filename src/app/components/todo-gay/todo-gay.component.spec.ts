import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoGayComponent } from './todo-gay.component';

describe('TodoGayComponent', () => {
  let component: TodoGayComponent;
  let fixture: ComponentFixture<TodoGayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoGayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoGayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
