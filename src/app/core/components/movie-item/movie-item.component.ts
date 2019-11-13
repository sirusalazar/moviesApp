import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "@moviesApp-core/models/movie.model";
import { MovieService } from "@moviesApp-core/services/movie.service";

@Component({
  selector: "mas-movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"]
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  delete() {
    this.movieService.deleteMovie(this.movie.id);
  }

  toggleFavorite() {
    this.movieService.toggleFavorite(this.movie.id);
  }
}
