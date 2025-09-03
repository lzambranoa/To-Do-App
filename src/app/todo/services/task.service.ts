import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  addTask(title: string) {
    console.log('Task added:', title);
  }

  getTasks() {
    return [
      { id: 1, title: 'Task 1', completed: false, createdAt: new Date() },
      { id: 2, title: 'Task 2', completed: true, createdAt: new Date() },
    ];
  }

  updateTask(id: number, title: string) {
    console.log('Task updated:', id, title);
  }

  deleteTask(id: number) {
    console.log('Task deleted:', id);
  }

}
