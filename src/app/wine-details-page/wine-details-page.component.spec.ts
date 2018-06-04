import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineDetailsPageComponent } from './wine-details-page.component';

describe('WineDetailsPageComponent', () => {
  let component: WineDetailsPageComponent;
  let fixture: ComponentFixture<WineDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
