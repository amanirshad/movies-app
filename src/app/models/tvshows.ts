import { Movie } from './movie';
// export interface TvShows extends Movie {}

export interface TvShowsDto {
    page: number;
    results: TvShows[];
    total_results: number;
    total_pages: number;
  }
export interface TvShows extends Movie{

        backdrop_path: string,
        first_air_date: string,
        genre_ids: number[],
        id: number,
        name: string,
        origin_country: string[],
        original_language: string,
        original_name: string,
        overview: string,
        popularity: number,
        poster_path: string,
        vote_average: number,
        vote_count: number

}


export interface TvVideoDto{
  id: number,
  results: MovieVideo[]
}

export interface MovieVideo{
  site: string,
  key: string
}