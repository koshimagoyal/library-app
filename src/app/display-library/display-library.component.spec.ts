import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLibraryComponent } from './display-library.component';

describe('DisplayLibraryComponent', () => {
  let component: DisplayLibraryComponent;
  let fixture: ComponentFixture<DisplayLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
