import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { LoaderState } from "@moviesApp-shared/components/loader/loadState";
import { LoaderService } from "@moviesApp-shared/services/loader.service";

@Component({
  selector: "mas-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
  show = false;
  private subscription: Subscription;
  constructor(private loaderService: LoaderService) {}
  ngOnInit() {
    this.subscription = this.loaderService.loaderState.subscribe(
      (state: LoaderState) => {
        this.show = state.show;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
