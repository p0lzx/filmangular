import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListeMovies} from './liste-movies/liste-movies';

@Component({
  imports: [RouterOutlet, ListeMovies],
  selector: 'app-root',
  styleUrl: './app.css', //we can use style instead of styleUrl to write our css style
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('film');
}
