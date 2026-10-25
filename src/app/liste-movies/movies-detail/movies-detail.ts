import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Film } from '../film/Film';
import { ActivatedRoute } from '@angular/router';
import { Moviesservice } from '../../services/moviesservice';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-movies-detail',
  styleUrl: './movies-detail.css',
  templateUrl: './movies-detail.html',
})
export class MoviesDetail implements OnInit {
  @Input() filminec!: Film; //the ! is added to avoid having no initializer or assigned constructor (to search in details)

  @Output() filmdetailed: EventEmitter<Film> = new EventEmitter<Film>(); //parent(movie-card) prend infos du fils(movie-detail)
  private router = inject(Router);
  private moviedetail = inject(Moviesservice);

  ondetail() {
    this.filmdetailed.emit(this.filminec);
  }
  ngOnInit() {
    this.moviedetail.getMoviesDetail(this.filminec.id) // to continue
  }

  private actroute = inject(ActivatedRoute);
}
