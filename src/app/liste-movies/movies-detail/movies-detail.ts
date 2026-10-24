import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../film/Film';

@Component({
  imports: [],
  selector: 'app-movies-detail',
  styleUrl: './movies-detail.css',
  templateUrl: './movies-detail.html',
})
export class MoviesDetail {
  @Input() filminec!: Film; //the ! is added to avoid having no initializer or assigned constructor (to search in details)

  @Output() filmdetailed: EventEmitter<Film> = new EventEmitter<Film>(); //parent(movie-card) prend infos du fils(movie-detail)

  ondetail() {
    this.filmdetailed.emit(this.filminec);
  }
}
