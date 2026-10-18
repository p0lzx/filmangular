import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-list-movies-searchbar',
  styleUrl: './list-movies-searchbar.css',
  templateUrl: './list-movies-searchbar.html',
})
export class ListMoviesSearchbar {
  searchQuery: string = '';
  onSearch() {}
}
