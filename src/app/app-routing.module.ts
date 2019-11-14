import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "@moviesApp-core/home/home.component";
import { MovieFormComponent } from "@moviesApp-core/movie-form/movie-form.component";
import { MovieDetailsComponent } from "@moviesApp-core/components/movie-details/movie-details.component";
import { TopMoviesComponent } from "@moviesApp-core/top-movies/top-movies.component";
import { CanDeactivateGuard } from "@moviesApp-shared/services/canDeactiveGuard.service";
import { FavoritesComponent } from "@moviesApp-core/favorites/favorites.component";
import { NotFoundComponent } from "@moviesApp-core/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { title: "Home" },
    children: [{ path: "movie/:id", component: MovieDetailsComponent }],
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    data: { title: "Home" },
    children: [
      {
        path: "movie/:id",
        component: MovieDetailsComponent
      }
    ],
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: "new",
    component: MovieFormComponent,
    data: { title: "New" },
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: "edit/:position",
    component: MovieFormComponent,
    data: { title: "Edit" },
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: "top",
    component: TopMoviesComponent,
    data: { title: "Top 5" },
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: "favorites",
    component: FavoritesComponent,
    data: { title: "Favorites" }
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule {}

export const routedComponents = [
  HomeComponent,
  MovieFormComponent,
  MovieDetailsComponent,
  TopMoviesComponent,
  FavoritesComponent
];
