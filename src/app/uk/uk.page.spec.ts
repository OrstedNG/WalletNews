import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UKPage } from './uk.page';

describe('UKPage', () => {
  let component: UKPage;
  let fixture: ComponentFixture<UKPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UKPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UKPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
