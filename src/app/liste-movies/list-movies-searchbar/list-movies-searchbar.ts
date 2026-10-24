import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Film } from '../film/Film';
import { Movies } from '../../services/movies';

@Component({
  imports: [FormsModule],
  selector: 'app-list-movies-searchbar',
  styleUrl: './list-movies-searchbar.css',
  templateUrl: './list-movies-searchbar.html',
})
export class ListMoviesSearchbar {
  searchQuery: string = '';
  movies:any[]= [];
  private movieserv = inject(Movies);

  onSearch() {
    this.movieserv.searchMovies(this.searchQuery).subscribe({
      next: (response) => {
        this.movies = (response.results || []).slice(0,5); //afin d'afficher les premiers 5 résultats avec pipe
        console.log("search results:", this.movies);
      },
      error: (err) => {
        console.error('Error fetching movie', err);
      },
    });
  } // called a promise
}
