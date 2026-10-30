import { Routes, RouterModule } from '@angular/router';
import { App } from './app';
import { Moviesservice } from './services/moviesservice';
import { ListeMovies } from './liste-movies/liste-movies';
import { MoviesDetail } from './liste-movies/movies-detail/movies-detail';
import { LoginFilms } from './login-films/login-films';
import { ListMoviesHeader } from './liste-movies/list-movies-header/list-movies-header';
import { MoviesComment } from './liste-movies/movies-comment/movies-comment';

export const routes: Routes = [
  { path: '', component: ListeMovies },
  { path: 'movies', component: ListeMovies },
  { path: 'favourites', component: ListeMovies },
  { path: 'comment/:id', component:  MoviesComment},
  { path: 'movie/:id', component: MoviesDetail },
  { path: 'login', component: LoginFilms },
  { path: 'singin', component: LoginFilms },
  { path: '**', redirectTo: 'login' },
];
