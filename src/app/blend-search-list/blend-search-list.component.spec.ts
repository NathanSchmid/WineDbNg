import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendSearchListComponent } from './blend-search-list.component';

describe('BlendSearchListComponent', () => {
  let component: BlendSearchListComponent;
  let fixture: ComponentFixture<BlendSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlendSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlendSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
