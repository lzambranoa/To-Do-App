import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoListItemComponent } from "./todo-list-item/todo-list-item.component";

@Component({
  selector: 'app-todo-list',
  imports: [TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent { }
