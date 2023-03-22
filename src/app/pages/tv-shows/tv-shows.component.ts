import { Component, OnInit } from '@angular/core';
import { TvShows } from 'src/app/models/tvshows';
import { TvShowsServiceService } from 'src/app/services/tv-shows-service.service';

import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';


@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  tvshows: TvShows[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;


  constructor(private tvShowsService: TvShowsServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenres(genreId, 1);
      } else {
        this.getPagedMovie(1);
      }
    });
  }
  getMoviesByGenres(genreId: string, page: number) {
    this.tvShowsService.getTvByGenre(genreId, page).subscribe((tvshows) => {
      this.tvshows = tvshows;
    });
  }

  getPagedMovie(page: number, searchKeyword?: string ) {
    this.tvShowsService.searchTv(page,searchKeyword).subscribe((tvshows) => {
      this.tvshows = tvshows;
    });
  }

  paginate(event: any) {
    if (this.genreId) {
      this.getMoviesByGenres(this.genreId, event.page + 1);
    } else {
      if(this.searchValue){

      this.getPagedMovie(event.page + 1,this.searchValue);
      }else{
        this.getPagedMovie(event.page + 1);
      }
    }
  }

  searchChanged(){
    if(this.searchValue){
      this.getPagedMovie(1, this.searchValue);
    }
   
  }
}
