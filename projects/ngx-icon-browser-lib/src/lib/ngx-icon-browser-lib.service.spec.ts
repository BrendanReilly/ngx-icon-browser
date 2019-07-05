import { TestBed } from '@angular/core/testing';

import { NgxIconBrowserLibService } from './ngx-icon-browser-lib.service';

describe('NgxIconBrowserLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxIconBrowserLibService = TestBed.get(NgxIconBrowserLibService);
    expect(service).toBeTruthy();
  });
});
