import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineSearchListComponent } from './wine-search-list.component';

describe('WineSearchListComponent', () => {
  let component: WineSearchListComponent;
  let fixture: ComponentFixture<WineSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
