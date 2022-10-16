import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyHousePageComponent } from './party-house-page.component';

describe('PartyHousePageComponent', () => {
  let component: PartyHousePageComponent;
  let fixture: ComponentFixture<PartyHousePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyHousePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyHousePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
