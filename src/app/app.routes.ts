import { Routes, RouterModule } from '@angular/router';
import { App } from './app';
import { Movies } from './services/movies';
import { ListeMovies } from './liste-movies/liste-movies';
import { MoviesDetail } from './liste-movies/movies-detail/movies-detail';
import { LoginFilms } from './login-films/login-films';
import { SinginFilms } from './singin-films/singin-films';
import { ListMoviesHeader } from './liste-movies/list-movies-header/list-movies-header';

export const routes: Routes = [
  { path: 'movies', component: ListeMovies },
  { path: '', component: ListeMovies},
  { path: 'movies', component: ListeMovies },
  { path: 'favourites', component: ListeMovies},
  { path: 'movies/:id', component: MoviesDetail },
  { path: 'login', component: LoginFilms },
  { path: 'singin', component: SinginFilms },
  { path: '**', redirectTo: 'login' },
];
