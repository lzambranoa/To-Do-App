import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./todo/pages/todo-page/todo-page.component').then(m => m.TodoPageComponent)
    }
];
