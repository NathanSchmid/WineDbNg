import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineColorSearchComponent } from './wine-color-search.component';

describe('WineColorSearchComponent', () => {
  let component: WineColorSearchComponent;
  let fixture: ComponentFixture<WineColorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineColorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineColorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
