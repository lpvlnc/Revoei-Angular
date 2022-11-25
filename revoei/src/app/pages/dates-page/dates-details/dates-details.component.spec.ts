import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesDetailsComponent } from './dates-details.component';

describe('DatesDetailsComponent', () => {
  let component: DatesDetailsComponent;
  let fixture: ComponentFixture<DatesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
