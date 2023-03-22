import { TestBed } from '@angular/core/testing';

import { TvShowsServiceService } from './tv-shows-service.service';

describe('TvShowsServiceService', () => {
  let service: TvShowsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
