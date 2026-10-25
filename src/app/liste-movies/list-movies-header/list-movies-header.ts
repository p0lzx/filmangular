import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet, RouterModule],
  selector: 'app-list-movies-header',
  styleUrl: './list-movies-header.css',
  templateUrl: './list-movies-header.html',
})
export class ListMoviesHeader {
  private authStatus: boolean = false;
}
