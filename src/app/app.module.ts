import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToasterModule, ToasterService } from "angular2-toaster";

import { AppRoutingModule, routedComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppSharedModule } from "@moviesApp-shared/app-shared.module";
import { CoreModule } from "@moviesApp-core/core.module";

import { LoaderInterceptorService } from "./interceptors/loader.interceptor";
import { HttpErrorInterceptorService } from "./interceptors/error.interceptor";

@NgModule({
  declarations: [AppComponent, routedComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppSharedModule,
    BrowserAnimationsModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToasterModule
  ],
  providers: [
    HttpClientModule,
    ToasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
