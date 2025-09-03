import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todo-add',
  imports: [],
  templateUrl: './todo-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAddComponent { 

  

  constructor(private taskService: TaskService){}

  
  addTask(value: string) {
    this.taskService.addTask(value);
  }

}
