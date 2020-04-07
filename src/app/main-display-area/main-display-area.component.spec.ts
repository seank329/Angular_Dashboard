import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDisplayAreaComponent } from './main-display-area.component';

describe('MainDisplayAreaComponent', () => {
  let component: MainDisplayAreaComponent;
  let fixture: ComponentFixture<MainDisplayAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDisplayAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDisplayAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
