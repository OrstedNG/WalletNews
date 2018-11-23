import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USPage } from './us.page';

describe('USPage', () => {
  let component: USPage;
  let fixture: ComponentFixture<USPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
