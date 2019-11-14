import { Component, OnInit } from "@angular/core";
import { ConfigService } from "@moviesApp-shared/services/config.service";

@Component({
  selector: "mas-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  isMobileVisible: boolean = false;

  menuItems: any;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.menuItems = this.configService.getMenu();
  }

  public onToggleMenu = () => {
    this.isMobileVisible = !this.isMobileVisible;
  };
}
