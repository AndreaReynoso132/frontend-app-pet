// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/location', pathMatch: 'full' },
  {
    path: 'location',
    loadChildren: () => import('../app/features/home/home.module').then(m => m.HomeModule),
    data: { text: 'Welcome to our Location!' }
  },
  {
    path: 'blog',
    loadChildren: () => import('../app/features/home/home.module').then(m => m.HomeModule),
    data: { text: 'Read our latest Blog posts!' }
  },
  {
    path: 'services',
    loadChildren: () => import('../app/features/home/home.module').then(m => m.HomeModule),
    data: { text: 'Our Services for your Pet!' }
  },
  {
    path: 'about-us',
    loadChildren: () => import('../app/features/home/home.module').then(m => m.HomeModule),
    data: { text: 'About Us and Our Story!' }
  },
  {
    path: 'franchise',
    loadChildren: () => import('../app/features/home/home.module').then(m => m.HomeModule),
    data: { text: 'Join our Franchise!' }
  },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: '/login' }
];
