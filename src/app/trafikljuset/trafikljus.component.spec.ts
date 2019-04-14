import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafikljusComponent } from './trafikljus.component';

describe('TrafikljusComponent', () => {
  let component: TrafikljusComponent;
  let fixture: ComponentFixture<TrafikljusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafikljusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafikljusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
