import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { MovieService } from "@moviesApp-core/services/movie.service";
import { Movie } from "@moviesApp-core/models/movie.model";

@Component({
  selector: "mas-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"]
})
export class MovieDetailsComponent implements OnInit {
  movie = {};

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const position = params.get("id");
      this.movie = this.movieService.getMovie(position);
    });
  }
}
