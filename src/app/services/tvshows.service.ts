import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { MovieDto } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'a67d717cb525beee5b05921973aab6b1';

  constructor(private http: HttpClient) { }

  getTvShows(type: string = 'upcoming',count: number=12){
      return this.http.get<MovieDto>(
        `${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`
      ).pipe(
        switchMap((response) => {
          return of(response.results.slice(0,count));
        })
      );
  }
}
