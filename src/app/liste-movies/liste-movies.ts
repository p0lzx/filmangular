import { Component, inject, input, OnInit } from '@angular/core';
import { Film } from './film/Film';
import { MoviesCard } from './movies-card/movies-card';
import { ListMoviesSearchbar } from './list-movies-searchbar/list-movies-searchbar';
import {environment} from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http'
import { Movies } from '../services/movies';
import { MoviesDetail } from './movies-detail/movies-detail';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ListMoviesHeader } from './list-movies-header/list-movies-header';

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

  private moviesserv: Movies = inject(Movies); //service
  //private moviedetail: MoviesCard = new MoviesCard();

  ngOnInit() {
    this.moviesserv.getMovies().subscribe({
      next: (response) => {
        this.Films = response.results;
        console.log(this.Films);
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
      },
    }); // used for init
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



