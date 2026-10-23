import { Component, inject, input, OnInit } from '@angular/core';
import { Film } from './film/Film';
import { MoviesCard } from './movies-card/movies-card';
import { ListMoviesSearchbar } from './list-movies-searchbar/list-movies-searchbar';
import {environment} from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http'
import { Movies } from '../services/movies';

@Component({
  imports: [MoviesCard, ListMoviesSearchbar],
  selector: 'app-liste-movies',
  styleUrl: './liste-movies.css',
  templateUrl: './liste-movies.html',
})
export class ListeMovies implements OnInit {
  fav: Array<Film> = [];

  private moviesserv: Movies = new Movies();


  root_url: string = 'https://api.themoviedb.org/';
  private apiKey = environment.api_key; // Use this.apiKey for your requests

  ngOnInit() {
    this.moviesserv.getMovies(); // used for init
  }


  Films: Array<Film> = [

  ];

  addfav(film: Film) {
    if (film.favbool == true) {
      alert('Le film est déja été ajouté aux favoris');
    } else {
      alert(`Le film ${film.title} a été ajouté aux favoris`);
      this.fav.push(film);
      film.favbool = true;
    }
  }
}
