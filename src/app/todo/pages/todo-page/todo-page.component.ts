import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoAddComponent } from "../../components/todo-add/todo-add.component";
import { TodoListComponent } from '../../components/todo-list/todo-list.component';

@Component({
  selector: 'app-todo-page',
  imports: [TodoAddComponent, TodoListComponent],
  templateUrl: './todo-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPageComponent { }
