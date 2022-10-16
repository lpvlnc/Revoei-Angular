import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PartyHousePageRoutingModule } from './party-house-page-routing.module'
import { PartyHousePageComponent } from './party-house-page.component'

@NgModule({
    declarations: [PartyHousePageComponent],
    imports: [CommonModule, PartyHousePageRoutingModule],
})
export class PartyHousePageModule {}