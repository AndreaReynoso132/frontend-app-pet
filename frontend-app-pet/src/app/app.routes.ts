import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  {
    path: 'home',
    component: HomeComponent,
    data: { text: 'We Get Pet Care!' } 
  },
  {
    path: 'location',
    loadChildren: () =>
      import('../app/features/home/home.module').then((m) => m.HomeModule),
    data: { text: 'Welcome to our Location!' },
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('../app/features/home/home.module').then((m) => m.HomeModule),
    data: { text: 'Read our latest Blog posts!' },
  },
  {
    path: 'services',
    loadChildren: () =>
      import('../app/features/home/home.module').then((m) => m.HomeModule),
    data: { text: 'Our Services for your Pet!' },
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('../app/features/home/home.module').then((m) => m.HomeModule),
    data: { text: 'About Us and Our Story!' },
  },
  {
    path: 'franchise',
    loadChildren: () =>
      import('../app/features/home/home.module').then((m) => m.HomeModule),
    data: { text: 'Join our Franchise!' },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
