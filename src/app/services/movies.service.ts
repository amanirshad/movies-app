import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(){
      return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=a67d717cb525beee5b05921973aab6b1')
  }
}
