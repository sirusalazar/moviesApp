import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { MovieService } from "@moviesApp-core/services/movie.service";
import { Movie } from "@moviesApp-core/models/movie.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  mobileQuery: MediaQueryList;

  moviesList: Movie[];

  constructor(media: MediaMatcher, private movieSevice: MovieService) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
  }

  ngOnInit() {
    this.moviesList = this.movieSevice.getAllMovies();
  }
}
