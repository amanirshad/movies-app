import { Component, Input } from '@angular/core';
import { TvShows } from 'src/app/models/tvshows';

@Component({
  selector: 'app-tv-items-banner',
  templateUrl: './tv-items-banner.component.html',
  styleUrls: ['./tv-items-banner.component.scss']
})
export class TvItemsBannerComponent {
  @Input() items: TvShows[] = [];

  //@Input() tvShowItems: TvShows[] = []

  @Input() title: string = '';

}
