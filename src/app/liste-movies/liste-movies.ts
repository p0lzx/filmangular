import { Component, inject, input, OnInit } from '@angular/core';
import { Film } from './film/Film';
import { MoviesCard } from './movies-card/movies-card';
import { ListMoviesSearchbar } from './list-movies-searchbar/list-movies-searchbar';
import {environment} from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http'
import { Moviesservice } from '../services/moviesservice';
import { MoviesDetail } from './movies-detail/movies-detail';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ListMoviesHeader } from './list-movies-header/list-movies-header';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  imports: [
    MoviesCard,
    ListMoviesSearchbar,
    MoviesDetail,
    RouterModule,
    RouterLink,
    RouterOutlet,
    ListMoviesHeader,
  ],
  selector: 'app-liste-movies',
  styleUrl: './liste-movies.css',
  templateUrl: './liste-movies.html',
})
export class ListeMovies implements OnInit {
  fav: Array<Film> = [];

  private moviesserv: Moviesservice = inject(Moviesservice); //service
  private cdr = inject(ChangeDetectorRef); //film doesn't reload after oninit redirect
  //private moviedetail: MoviesCard = new MoviesCard();

  ngOnInit(): void {
    console.log('ListeMovies initialized');

    this.moviesserv.getMovies().subscribe({
      next: (data) => {
        console.log('API response:', data);
        this.Films = data.results;
        this.cdr.markForCheck(); //solution for displaying, not only recieving data after redirection
        console.log('Films array:', this.Films);
      },
      error: (err) => console.error('Movie request failed:', err),
    });
  }

  Films: Array<Film> = [];

  addfav(film: Film) {
    if (film.favbool) {
      alert('Le film est déja été ajouté aux favoris');
    } else {
      alert(`Le film ${film.title} a été ajouté aux favoris`);
      this.fav.push(film);
      film.favbool = true;
    }
  }
}



