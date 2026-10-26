import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Film } from '../film/Film';
import { Moviesservice } from '../../services/moviesservice';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-list-movies-searchbar',
  styleUrl: './list-movies-searchbar.css',
  templateUrl: './list-movies-searchbar.html',
})
export class ListMoviesSearchbar {
  @Input() filmine!: Film;
  //@Output() filmselected: EventEmitter<Moviesservice> = new EventEmitter();

  searchQuery: string = '';
  movies: any[] = [];
  private movieserv = inject(Moviesservice);
  private router = inject(Router);

  onSearch() {
    this.movieserv.searchMovies(this.searchQuery).subscribe({
      next: (response) => {
        this.movies = (response.results || []).slice(0, 5); //afin d'afficher les premiers 5 résultats avec pipe
        console.log('search results:', this.movies);
      },
      error: (err) => {
        console.error('Error fetching movie', err);
      },
    });
  } // called a promise
  ondetail(id: number | string) {
    this.router.navigate(['/movie', id]);
  }

}
