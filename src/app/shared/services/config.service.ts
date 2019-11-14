import { Injectable } from "@angular/core";

import { AppConstants } from "@moviesApp-core/constants/core.constants";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  mainMenu: any;
  constructor() {}
  retrieveMainMenu() {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        console.log("simulation of load menu....");
        resolve(AppConstants.mainMenu);
      }, 500);
    });
  }

  getMenu() {
    return this.mainMenu;
  }

  setMenu(menu: any) {
    this.mainMenu = menu;
  }
}
