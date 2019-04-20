import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAddPage } from './news-add.page';

describe('NewsAddPage', () => {
  let component: NewsAddPage;
  let fixture: ComponentFixture<NewsAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
