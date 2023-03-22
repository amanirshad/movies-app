import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { MovieCredits, MovieImages } from 'src/app/models/movie';
import { MovieVideo, TvShows } from 'src/app/models/tvshows';
import { TvShowsServiceService } from 'src/app/services/tv-shows-service.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent {
  tvShow: TvShows | null = null;

  movieVideos: MovieVideo[] = [];

  movieImages: MovieImages | null = null;

  movieCredits: MovieCredits | null = null;

  movieSimilar: TvShows[] = [];

  imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private tvshowsService: TvShowsServiceService) {}
  ngOnDestroy(): void {
    console.log('component destroyed');
  }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getSimilarMovies(id);
    });
  }

  getMovie(id: string) {
    this.tvshowsService.getTv(id).subscribe((tvShowData) => {
      this.tvShow = tvShowData;
      console.log(this.tvShow);
    });
  }

  getMovieVideos(id: string) {
    this.tvshowsService.getTvVideos(id).subscribe((tvShowVideoData) => {
      this.movieVideos = tvShowVideoData;
      console.log(this.movieVideos);
    });
  }

  getMovieImages(id: string) {
    this.tvshowsService.getTvImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
      console.log(this.movieImages);
    });
  }

  getMovieCredits(id: string) {
    this.tvshowsService.getTvCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
      console.log(this.movieCredits);
    });
  }

  getSimilarMovies(id: string){
    this.tvshowsService.getSimilarTvShows(id).subscribe((similarMoviesData)=>{
      this.movieSimilar = similarMoviesData;
      console.log(this.movieSimilar);
    })
  }
}
