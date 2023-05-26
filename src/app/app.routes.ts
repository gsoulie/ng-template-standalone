import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadComponent: () => import('./components/welcome/welcome.component'),
    title: 'Welcome on Angular template',
    data: {
      routeInfo: 'This i a parameter from the route data object'
    }
  }
];
