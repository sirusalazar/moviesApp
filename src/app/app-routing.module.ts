import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { MovieFormComponent } from './core/movie-form/movie-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'new',
    component: MovieFormComponent,
    data: { title: 'New' }
  },
  {
    path: 'edit/:position',
    component: MovieFormComponent,
    data: { title: 'Edit' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [HomeComponent, MovieFormComponent];
