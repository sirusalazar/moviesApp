import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "@moviesApp-core/home/home.component";
import { MovieFormComponent } from "@moviesApp-core/movie-form/movie-form.component";
import { MovieDetailsComponent } from "@moviesApp-core/components/movie-details/movie-details.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { title: "Home" },
    children: [{ path: "movie/:position", component: MovieDetailsComponent }]
  },
  {
    path: "home",
    component: HomeComponent,
    data: { title: "Home" },
    children: [{ path: "movie/:position", component: MovieDetailsComponent }]
  },
  {
    path: "new",
    component: MovieFormComponent,
    data: { title: "New" }
  },
  {
    path: "edit/:position",
    component: MovieFormComponent,
    data: { title: "Edit" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [
  HomeComponent,
  MovieFormComponent,
  MovieDetailsComponent
];
