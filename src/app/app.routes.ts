import { Routes } from '@angular/router';
import { App } from './app';
import { Movies } from './services/movies';
import { ListeMovies } from './liste-movies/liste-movies';
import { MoviesDetail } from './liste-movies/movies-detail/movies-detail';

export const routes: Routes = [
  { path: 'movies', component: ListeMovies },
  { path: '', component: App },
  { path: 'movies/:id', component: MoviesDetail },
];
