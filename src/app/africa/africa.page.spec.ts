import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaPage } from './africa.page';

describe('AfricaPage', () => {
  let component: AfricaPage;
  let fixture: ComponentFixture<AfricaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
