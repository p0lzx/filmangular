import { inject, Service, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Film } from '../liste-movies/film/Film';

@Service()
export class Movies {
 // constructor(private http: HttpClient) {}
  private apiUrl = 'https://api.themoviedb.org/3';
  private http = inject(HttpClient); //3rd step
  private apiKey = environment.api_key; // Use this.apiKey for your requests

  getMovies(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/popular`, {
      params: {
        api_key: this.apiKey,
        page: page.toString(),
        language: 'fr-FR',
      },
    });
  } //methods

  getMoviesDetail(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/${id}`, {
      params: {
        api_key: this.apiKey,
        language: 'fr-FR',
      },
    });
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/movie`, {
      params: {
        api_key: this.apiKey,
        query: query,
        language: 'fr-FR',
      },
    });
  }
}
