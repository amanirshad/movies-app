import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from '../models/movie';
import { of, switchMap } from 'rxjs';
import { TvShowsDto } from '../models/tvshows';
import { GenresDto } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'a67d717cb525beee5b05921973aab6b1';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 18) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.results.slice(0, count));
      })
    );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieVideos(id: string) {
    return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.results);
      })
    );
  }

  getMoviesGenres() {
    return this.http.get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.genres);
      })
    );
  }
  getMoviesByGenre(genreId: string, page: number) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/discover/movie/?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((response) => {
          return of(response.results);
        })
      );
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getSimilarMovies(id: string, count: number = 4) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.results.slice(0, count));
      })
    );
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' :  '/movie/popular'
    return this.http.get<MovieDto>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.results);
      })
    );
  }

  getTvs(type: string = 'popular', count: number = 18) {
    return this.http.get<TvShowsDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }
}
