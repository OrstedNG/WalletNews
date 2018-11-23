import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliaPage } from './australia.page';

describe('AustraliaPage', () => {
  let component: AustraliaPage;
  let fixture: ComponentFixture<AustraliaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustraliaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
