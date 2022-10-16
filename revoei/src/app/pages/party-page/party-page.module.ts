import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PartyPageRoutingModule } from './party-page-routing.module'
import { PartyPageComponent } from './party-page.component'

@NgModule({
    declarations: [PartyPageComponent],
    imports: [CommonModule, PartyPageRoutingModule],
})
export class PartyPageModule {}