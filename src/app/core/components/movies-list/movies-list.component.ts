import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { Movie } from "@moviesApp-core/models/movie.model";

@Component({
  selector: "mas-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.scss"]
})
export class MoviesListComponent implements OnInit {
  @ViewChild("sidenav", { static: true }) sidenav: MatSidenav;

  @Input() movies: Movie[];

  filterParam = "";

  constructor() {}

  ngOnInit() {
    this.sidenav.open();
  }

  close() {
    this.sidenav.close();
  }
  open() {
    this.sidenav.open();
  }

  applyFilter(filterValue: string) {
    this.filterParam = filterValue;
  }
}
