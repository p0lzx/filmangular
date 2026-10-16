import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../film/Film';

@Component({
  imports: [],
  selector: 'app-movies-detail',
  styleUrl: './movies-detail.css',
  templateUrl: './movies-detail.html',
})
export class MoviesDetail {
  @Input() filmcard!: Film; //the ! is added to avoid having no initializer or assigned constructor (to search in details)

  @Output() filmSelecteddetails : EventEmitter<Film> = new EventEmitter<Film>();

  ondetail(){
    this.filmSelecteddetails.emit(this.filmcard)
  }
  afficherdetail(){
    this.filmSelecteddetails.emit(this.filmcard)
  }



}
