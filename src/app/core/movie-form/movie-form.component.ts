import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Validators, FormBuilder } from "@angular/forms";

import { MovieService } from "@moviesApp-core/services/movie.service";
import { Movie } from "@moviesApp-core/models/movie.model";

@Component({
  selector: "mas-movie-form",
  templateUrl: "./movie-form.component.html",
  styleUrls: ["./movie-form.component.scss"]
})
export class MovieFormComponent implements OnInit, OnDestroy {
  movieBase64Img = "";
  @ViewChild("removableInput", { static: false })
  private removableInput: any;

  routeData: any;

  formTitle: string;

  movieForm = this._fb.group({
    title: ["", Validators.required],
    description: [""],
    releaseDate: ["", Validators.required],
    image: ["", Validators.required],
    favorite: [false]
  });

  constructor(
    private movieService: MovieService,
    private _fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeData = this.route.data.subscribe(value => {
      this.formTitle = value.title;
    });
  }

  ngOnDestroy(): void {
    this.routeData.unsubscribe();
  }

  onSubmit() {
    this.movieService.saveMovie(this.getFormData());
  }

  getFormData(): Movie {
    const movie: Movie = {
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

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.movieBase64Img = btoa(binaryString);
    console.log(btoa(binaryString));
  }

  onClearImage(evt) {
    this.removableInput.clear(evt);
    this.movieBase64Img = "";
  }
}