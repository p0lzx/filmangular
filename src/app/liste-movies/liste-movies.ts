import { Component } from '@angular/core';
import { Film } from './film/Film';
import { MoviesCard } from './movies-card/movies-card';
import { ListMoviesSearchbar } from './list-movies-searchbar/list-movies-searchbar';
import {environment} from '../../environments/environment.development';

@Component({
  imports: [MoviesCard, ListMoviesSearchbar],
  selector: 'app-liste-movies',
  styleUrl: './liste-movies.css',
  templateUrl: './liste-movies.html',
})
export class ListeMovies {
  fav: Array<Film> = [];

  root_url: string = 'https://api.themoviedb.org/';
  private apiKey = environment.api_key; // Use this.apiKey for your requests

  Films: Array<Film> = [
    {
      id: 1,
      title: 'Odyssey',
      overview: 'Greek film ig',
      poster_path: 'https://www.faber.co.uk/wp-content/uploads/2026/05/Odyssey.jpg',
      release_date: 2026,
      vote_average: 8.3,
      favbool: false,
    },

    {
      id: 2,
      title: 'Spiderman: Brand new day',
      overview: 'Spiderman film ig',
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BOWNjYWM3NWItOGE0ZS00MWRjLThiZWEtYjc4ZmNmMmU5ZTVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      release_date: 2026,
      vote_average: 7.9,
      favbool: false,
    },

    {
      id: 3,
      title: 'Taxi Driver',
      overview: 'Robert de niro drama film',
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BZDNhMGYwM2UtMTdlZS00MGQ1LWI2YzAtODY5YWI1MjYyNzRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      release_date: 1976,
      vote_average: 8.7,
      favbool: false,
    },

    {
      id: 3,
      title: 'The Deer Huner',
      overview: 'Robert de niro thriller film',
      poster_path:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTi1PZE_rS-iB0qLHbsCXygi5CgTqQ1DtIfuwJ96E9pe7m0iNSHTxEgRyZcE2NaG2bJkSkw&s=10',
      release_date: 1978,
      vote_average: 8.1,
      favbool: false,
    },

    {
      id: 4,
      title: 'The Godfather',
      overview: 'Italian-American mafia movie',
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      release_date: 1972,
      vote_average: 9.3,
      favbool: false,
    },
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
