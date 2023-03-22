import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { TvShowsServiceService } from 'src/app/services/tv-shows-service.service';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit{

  genres: Genre[] = [];
  genresTv: Genre[] = [];

  constructor(private moviesService: MoviesService, private tvServices: TvShowsServiceService) {}

  ngOnInit(): void {
      this.moviesService.getMoviesGenres().subscribe((genresData)=>{
        this.genres = genresData;
      })
      this.tvServices.getTvGenres().subscribe((genresData)=>{
        this.genresTv = genresData;
      })
  }
}
