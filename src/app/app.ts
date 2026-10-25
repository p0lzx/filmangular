import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import {ListeMovies} from './liste-movies/liste-movies';
import { ListMoviesHeader } from './liste-movies/list-movies-header/list-movies-header';
import { routes } from './app.routes';
import { Router } from 'express';

@Component({
  imports: [RouterOutlet, ListeMovies, ListMoviesHeader, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css', //we can use style instead of styleUrl to write our css style
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('film');
  //private router = inject(Router);
  //private activatedRoute = inject(ActivatedRoute);
  hideHeader = false;
}
