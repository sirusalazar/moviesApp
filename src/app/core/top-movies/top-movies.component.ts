import { Component, OnInit } from "@angular/core";
import { MovieService } from "@moviesApp-core/services/movie.service";

@Component({
  selector: "mas-top-movies",
  templateUrl: "./top-movies.component.html",
  styleUrls: ["./top-movies.component.scss"]
})
export class TopMoviesComponent implements OnInit {
  moviesList: any;

  constructor(private moviesService: MovieService) {
    this.moviesService.getTopMovies().subscribe((response: any) => {
      this.moviesList = response.movies;
    });
  }

  ngOnInit() {}
}
