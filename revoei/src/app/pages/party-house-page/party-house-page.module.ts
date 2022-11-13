import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { PartyCardModule } from '@shared/party-card/party-card.module'
import { TitleModule } from '@shared/title/title.module'
import { SwiperModule } from 'swiper/angular'
import { PartyHousePageRoutingModule } from './party-house-page-routing.module'
import { PartyHousePageComponent } from './party-house-page.component'

@NgModule({
    declarations: [PartyHousePageComponent],
    imports: [CommonModule, CoreModule, PartyHousePageRoutingModule, TitleModule, PartyCardModule, SwiperModule],
})
export class PartyHousePageModule {}