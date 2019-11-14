import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { WebStorageService } from "@moviesApp-shared/services/webStorage.service";
import { AppConstants } from "@moviesApp-core/constants/core.constants";
import { Movie } from "@moviesApp-core/models/movie.model";

@Injectable()
export class MovieService {
  private movies: Movie[];

  constructor(
    private httpClient: HttpClient,
    private webStorageService: WebStorageService
  ) {
    this.movies =
      this.webStorageService.retrieve(AppConstants.localStoreKey) || [];
  }

  getMovie(movieId: string) {
    const filterdMovies = this.movies.filter(item => item.id === movieId);
    if (filterdMovies.length) {
      return filterdMovies[0];
    }
    return null;
  }

  saveMovie(movie: Movie) {
    if (!this.movies.length) {
      this.movies = [];
    }
    this.movies.push(movie);
    this.persistMovies();
  }

  getAllMovies(): Movie[] {
    return this.movies;
  }

  deleteMovie(id: string) {
    this.movies.splice(
      this.movies.findIndex(item => item.id === id),
      1
    );
    this.persistMovies();
  }

  toggleFavorite(id) {
    const index = this.movies.map(m => m.id).indexOf(id);
    if (index > -1) {
      this.movies[index].favorite = !this.movies[index].favorite;
      this.persistMovies();
    }
  }

  getTopMovies() {
    return this.httpClient.get(AppConstants.top5Url);
  }

  getFavorites() {
    return this.movies.filter(item => item.favorite);
  }

  private persistMovies() {
    this.webStorageService.store(AppConstants.localStoreKey, this.movies);
  }
}
