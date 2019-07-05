import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIconBrowserLibComponent } from './ngx-icon-browser-lib.component';

describe('NgxIconBrowserLibComponent', () => {
  let component: NgxIconBrowserLibComponent;
  let fixture: ComponentFixture<NgxIconBrowserLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxIconBrowserLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIconBrowserLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
