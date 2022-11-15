import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyConfirmationListPageComponent } from './party-confirmation-list-page.component';

describe('PartyConfirmationListPageComponent', () => {
  let component: PartyConfirmationListPageComponent;
  let fixture: ComponentFixture<PartyConfirmationListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyConfirmationListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyConfirmationListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
