import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { SearchBarModule } from '@shared/search-bar/search-bar.module'
import { HomePageRoutingModule } from './home-page-routing.module'
import { HomePageComponent } from './home-page.component'
import { PartyCardModule } from '@shared/party-card/party-card.module'
import { FeedbackModule } from '@shared/feedback/feedback.module'

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, HomePageRoutingModule, CoreModule, SearchBarModule, PartyCardModule, FeedbackModule],
})
export class HomePageModule {}