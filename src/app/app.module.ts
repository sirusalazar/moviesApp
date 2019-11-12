import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppRoutingModule, routedComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppSharedModule } from "@moviesApp-shared/app-shared.module";
import { CoreModule } from "@moviesApp-core/core.module";

@NgModule({
  declarations: [AppComponent, routedComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppSharedModule,
    BrowserAnimationsModule,
    CoreModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
