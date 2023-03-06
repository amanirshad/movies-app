import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'a67d717cb525beee5b05921973aab6b1';

  constructor(private http: HttpClient) { }

  getTvShows(type: string = 'upcoming'){
      return this.http.get<MovieDto>(
        `${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`
      )
  }
}
