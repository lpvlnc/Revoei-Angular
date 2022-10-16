import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { SearchBarModule } from '@shared/search-bar/search-bar.module'
import { PartyCardOverlayComponent } from './party-card-overlay/party-card-overlay.component'
import { PartyCardComponent } from './party-card/party-card.component'
import { HomePageRoutingModule } from './home-page-routing.module'
import { HomePageComponent } from './home-page.component'

@NgModule({
    declarations: [HomePageComponent, PartyCardComponent, PartyCardOverlayComponent],
    imports: [CommonModule, HomePageRoutingModule, CoreModule, SearchBarModule],
})
export class HomePageModule {}