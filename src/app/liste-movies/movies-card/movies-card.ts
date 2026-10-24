import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {Film} from '../film/Film';
import {MoviesDetail} from '../movies-detail/movies-detail';

@Component({
  imports: [MoviesDetail],
  selector: 'app-movies-card',
  styleUrl: './movies-card.css',
  templateUrl: './movies-card.html',
})
export class MoviesCard {
  //@ViewChild(MoviesDetail) detail!: MoviesDetail;
  displaydet: String = "";

  @Input() filmine!: Film;
  @Output() filmSelected: EventEmitter<Film> = new EventEmitter<Film>();

  onaddfav() {
    this.filmSelected.emit(this.filmine);
  }

  showdetails(filmine: Film) {
    if (filmine.showDetails) {
      //this.displaydet = "{{filmine.overview}}";
      //this.displaydet
      filmine.showDetails = false;
    }
  }

  searchmovie(filmsear: Film) {}
}
