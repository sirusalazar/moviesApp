import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MovieFormComponent } from "./movie-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppSharedModule } from "@moviesApp-shared/app-shared.module";
import { MovieService } from "@moviesApp-core/services/movie.service";
import { HttpClient } from "selenium-webdriver/http";

describe("MovieFormComponent", () => {
  let component: MovieFormComponent;
  let fixture: ComponentFixture<MovieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, AppSharedModule],
      providers: [MovieService, HttpClient],
      declarations: [MovieFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty", () => {
    expect(component.movieForm.valid).toBeFalsy();
  });
});
