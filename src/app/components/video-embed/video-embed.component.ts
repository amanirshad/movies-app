import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'YouTube';

  @Input() key: string | null = null;

  videoUrl: SafeResourceUrl = '';

  constructor(private santizer: DomSanitizer) {}

  ngOnInit(): void {
    if(this.site!='Vimeo'){
      this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key);
    }else{
      this.videoUrl = this.getSafeUrl('https://player.vimeo.com/video/' + this.key);
    }
    
  }

  getSafeUrl(url : string){
    return this.santizer.bypassSecurityTrustResourceUrl(url);
  }
}
