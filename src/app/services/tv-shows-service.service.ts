import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from '../models/movie';
import { of, switchMap } from 'rxjs';
import { TvShows, TvShowsDto, TvVideoDto } from '../models/tvshows';
import { GenresDto } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class TvShowsServiceService {

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'a67d717cb525beee5b05921973aab6b1';

  constructor(private http: HttpClient) {}

  getTvShows(type: string = 'upcoming', count: number = 18) {
    return this.http.get<TvShowsDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.results.slice(0, count));
      })
    );
  }

  getTv(id: string) {
    return this.http.get<TvShows>(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`);
  }

  getTvVideos(id: string) {
    return this.http.get<TvVideoDto>(`${this.baseUrl}/tv/${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.results);
      })
    );
  }

  getTvGenres() {
    return this.http.get<GenresDto>(`${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.genres);
      })
    );
  }
  getTvByGenre(genreId: string, page: number) {
    return this.http
      .get<TvShowsDto>(`${this.baseUrl}/discover/tv/?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((response) => {
          return of(response.results);
        })
      );
  }

  getTvImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/tv/${id}/images?api_key=${this.apiKey}`);
  }

  getSimilarTvShows(id: string, count: number = 4) {
    return this.http.get<TvShowsDto>(`${this.baseUrl}/tv/${id}/similar?api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.results.slice(0, count));
      })
    );
  }

  getTvCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`);
  }

  searchTv(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' :  '/tv/popular'
    return this.http.get<TvShowsDto>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`).pipe(
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
