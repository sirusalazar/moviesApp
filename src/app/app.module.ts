import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule, routedComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppSharedModule } from "@moviesApp-shared/app-shared.module";
import { CoreModule } from "@moviesApp-core/core.module";

@NgModule({
  declarations: [AppComponent, routedComponents],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AppSharedModule,
    BrowserAnimationsModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
