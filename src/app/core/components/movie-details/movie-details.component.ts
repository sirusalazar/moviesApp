import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { MovieService } from "@moviesApp-core/services/movie.service";
import { Movie } from "@moviesApp-core/models/movie.model";

@Component({
  selector: "mas-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"]
})
export class MovieDetailsComponent implements OnInit {
  movie = {};
  @Input()
  inputedMovie: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.inputedMovie) {
      this.route.paramMap.subscribe(params => {
        const id = params.get("id");
        this.movie = this.movieService.getMovie(id);
        if (!this.movie) {
          this.router.navigate(["/home"]);
        }
      });
    } else {
      this.movie = this.inputedMovie;
    }
  }
}
