import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  imports: [],
  templateUrl: './todo-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListItemComponent { }
