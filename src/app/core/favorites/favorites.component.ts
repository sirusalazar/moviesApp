import { Component, OnInit } from "@angular/core";
import { MovieService } from "@moviesApp-core/services/movie.service";

@Component({
  selector: "mas-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"]
})
export class FavoritesComponent implements OnInit {
  moviesList: any;
  constructor(private movieService: MovieService) {
    this.moviesList = this.movieService.getFavorites();
  }

  ngOnInit() {}
}
