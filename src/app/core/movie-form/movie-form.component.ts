import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { UUID } from "angular2-uuid";

import { MovieService } from "@moviesApp-core/services/movie.service";
import { Movie } from "@moviesApp-core/models/movie.model";
import { CanComponentDeactive } from "@moviesApp-shared/services/canDeactiveGuard.service";
import { Toast } from "angular2-toaster";
import { NotificationService } from "@moviesApp-shared/services/notifications.service";

@Component({
  selector: "mas-movie-form",
  templateUrl: "./movie-form.component.html",
  styleUrls: ["./movie-form.component.scss"]
})
export class MovieFormComponent
  implements OnInit, OnDestroy, CanComponentDeactive {
  movieBase64Img = "";
  @ViewChild("imageInput", { static: false })
  private imageInput: any;

  routeData: any;

  formTitle: string;

  movieForm: FormGroup;

  constructor(
    private movieService: MovieService,
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {
    this.movieForm = this.generateForm();
  }

  ngOnInit() {
    this.routeData = this.route.data.subscribe(value => {
      this.formTitle = value.title;
    });
  }

  ngOnDestroy(): void {
    this.routeData.unsubscribe();
  }

  onSubmit(evt) {
    this.movieService.saveMovie(this.getFormData());
    this.movieForm.reset();
    this.imageInput.clear();
    this.movieBase64Img = "";
    this.movieForm = this.generateForm();
    this.notificationService.showSuccessMessage(
      "Movie Saved",
      "movie saved successfully"
    );
  }

  getFormData(): Movie {
    const movie: Movie = {
      id: UUID.UUID(),
      title: this.movieForm.get("title").value,
      description: this.movieForm.get("description").value,
      release: this.movieForm.get("releaseDate").value,
      image: this.movieBase64Img,
      favorite: false
    };
    return movie;
  }

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    this.movieBase64Img = readerEvt.target.result;
  }

  onClearImage(evt) {
    this.imageInput.clear(evt);
    this.movieBase64Img = "";
  }

  canDeactive() {
    return this.movieForm.dirty && this.movieForm.touched
      ? confirm("you have pending changes, would you like to continue?")
      : true;
  }

  generateForm(): FormGroup {
    return this._fb.group({
      title: ["", Validators.required],
      description: [""],
      releaseDate: ["", Validators.required],
      image: ["", Validators.required],
      favorite: [false]
    });
  }
}
