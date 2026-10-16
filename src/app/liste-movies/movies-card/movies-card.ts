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
  @ViewChild(MoviesDetail) detail!: MoviesDetail;

  @Input() filmin!: Film;
  showDetails: boolean = false;
  @Output() filmSelected: EventEmitter<Film> = new EventEmitter<Film>();

  ondetail() {
    this.showDetails = true;
    this.detail.afficherdetail();
  }

  onaddfav() {
    this.filmSelected.emit(this.filmin);
  }
}
