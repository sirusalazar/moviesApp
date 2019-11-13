import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "@moviesApp-core/models/movie.model";

@Component({
  selector: "mas-movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"]
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit() {}
}
