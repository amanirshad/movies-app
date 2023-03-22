import { Component, Input } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { TvShows } from 'src/app/models/tvshows';

@Component({
  selector: 'app-tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.scss']
})
export class TvItemComponent {
  @Input() itemData: TvShows | null = null;

  readonly imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}

}
