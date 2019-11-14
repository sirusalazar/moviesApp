import { Component, OnInit, ViewChild, Input, OnDestroy } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { Movie } from "@moviesApp-core/models/movie.model";
import { Subscription } from "rxjs";
import { MediaChange, MediaObserver } from "@angular/flex-layout";

@Component({
  selector: "mas-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.scss"]
})
export class MoviesListComponent implements OnInit, OnDestroy {
  watcher: Subscription;
  activeMediaQuery = "";
  currentMedia: MediaChange;
  @ViewChild("sidenav", { static: true }) sidenav: MatSidenav;

  @Input() movies: Movie[];

  filterParam = "";

  constructor(mediaObserver: MediaObserver) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change
        ? `'${change.mqAlias}' = (${change.mediaQuery})`
        : "";
      change.mqAlias === "xs" ? this.sidenav.close() : this.sidenav.open();
      this.currentMedia = change;
    });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

  close() {
    if (this.currentMedia.mqAlias === "xs") {
      this.sidenav.close();
    }
  }
  open() {
    this.sidenav.open();
  }

  applyFilter(filterValue: string) {
    this.filterParam = filterValue;
  }
}
