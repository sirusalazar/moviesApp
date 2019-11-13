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

  getMovie(moviePosition: number) {
    const moviesList = this.webStorageService.retrieve(
      AppConstants.localStoreKey
    );
    return moviesList[moviePosition];
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
}
