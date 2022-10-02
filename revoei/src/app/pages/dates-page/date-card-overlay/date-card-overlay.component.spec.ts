import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCardOverlayComponent } from './date-card-overlay.component';

describe('DateCardOverlayComponent', () => {
  let component: DateCardOverlayComponent;
  let fixture: ComponentFixture<DateCardOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateCardOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateCardOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
