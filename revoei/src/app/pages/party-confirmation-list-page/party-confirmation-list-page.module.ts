import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartyConfirmationListRoutingModule } from './party-confirmation-list-page-routing.module';
import { TitleModule } from '@shared/title/title.module';
import { CoreModule } from '@core/core.module';
import { PartyConfirmationListPageComponent } from './party-confirmation-list-page.component';
@NgModule({
  declarations: [
    PartyConfirmationListPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    PartyConfirmationListRoutingModule,
    TitleModule
  ]
})
export class PartyConfirmationListPageModule { }
