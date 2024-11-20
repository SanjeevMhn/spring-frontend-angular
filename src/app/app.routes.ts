import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    {
        path: 'home',
        component: BaseLayoutComponent,
        children: [
            {
                path: 'todo',
                component: TodoComponent
            },
            {
                path: '',
                redirectTo: 'todo',
                pathMatch: 'full',
            }
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
