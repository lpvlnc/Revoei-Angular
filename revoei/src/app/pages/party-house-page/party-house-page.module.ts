import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TitleModule } from '@shared/title/title.module'
import { PartyHousePageRoutingModule } from './party-house-page-routing.module'
import { PartyHousePageComponent } from './party-house-page.component'

@NgModule({
    declarations: [PartyHousePageComponent],
    imports: [CommonModule, PartyHousePageRoutingModule, TitleModule],
})
export class PartyHousePageModule {}