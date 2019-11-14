import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "mas-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  isMobileVisible: boolean = false;

  constructor() {}

  ngOnInit() {}

  public onToggleMenu = () => {
    this.isMobileVisible = !this.isMobileVisible;
  };
}
