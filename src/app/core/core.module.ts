import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { AppSharedModule } from "@moviesApp-shared/app-shared.module";
import { MovieService } from "@moviesApp-core/services/movie.service";

import { MovieItemComponent } from "@moviesApp-core/components/movie-item/movie-item.component";
import { MoviesListComponent } from "@moviesApp-core/components/movies-list/movies-list.component";
import { NotFoundComponent } from "@moviesApp-core/not-found/not-found.component";

@NgModule({
  declarations: [MoviesListComponent, MovieItemComponent, NotFoundComponent],
  exports: [MoviesListComponent, MovieItemComponent],
  imports: [ReactiveFormsModule, AppSharedModule, CommonModule],
  providers: [MovieService]
})
export class CoreModule {}
