import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { WebStorageService } from "@moviesApp-shared/services/webStorage.service";
import { AppConstants } from "@moviesApp-core/constants/core.constants";
import { Movie } from "@moviesApp-core/models/movie.model";

@Injectable()
export class MovieService {
  private data: any = {};

  constructor(
    private httpClient: HttpClient,
    private webStorageService: WebStorageService
  ) {}

  getMovie(movieId: string) {
    return this.getAllMovies().filter(item => item.id === movieId)[0];
  }

  saveMovie(movie: Movie) {
    const moviesList =
      this.webStorageService.retrieve(AppConstants.localStoreKey) || [];
    moviesList.push(movie);
    this.webStorageService.store(AppConstants.localStoreKey, moviesList);
  }

  getAllMovies(): Movie[] {
    return this.webStorageService.retrieve(AppConstants.localStoreKey) || [];
  }

  deleteMovie(id: string) {
    const movies = this.getAllMovies();
    const resultMovies = movies.filter(item => item.id !== id);
    this.webStorageService.store(AppConstants.localStoreKey, resultMovies);
    return resultMovies;
  }

  toggleFavorite(id) {
    const movies = this.getAllMovies();
    const index = movies.map(m => m.id).indexOf(id);
    if (index > -1) {
      movies[index].favorite = !movies[index].favorite;
      this.webStorageService.store(AppConstants.localStoreKey, movies);
    }
  }
}
