import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ButtonModule } from '@shared/button/button.module'
import { TitleModule } from '@shared/title/title.module'
import { PartyPageRoutingModule } from './party-page-routing.module'
import { PartyPageComponent } from './party-page.component'

@NgModule({
    declarations: [PartyPageComponent],
    imports: [CommonModule, PartyPageRoutingModule, TitleModule, ButtonModule],
})
export class PartyPageModule {}