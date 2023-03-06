import { Component, Input } from '@angular/core';
import { TvShows } from '../../models/tvshows';
import { Movie } from '../../models/movie';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {

  @Input() items: Movie[] = [];

  //@Input() tvShowItems: TvShows[] = []

  @Input() title: string = '';

}
