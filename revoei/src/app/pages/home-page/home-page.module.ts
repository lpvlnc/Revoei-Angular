import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { SearchBarModule } from '@shared/search-bar/search-bar.module'
import { DateCardOverlayComponent } from './date-card-overlay/date-card-overlay.component'
import { DateCardComponent } from './date-card/date-card.component'
import { HomePageRoutingModule } from './home-page-routing.module'
import { HomePageComponent } from './home-page.component'

@NgModule({
    declarations: [HomePageComponent, DateCardComponent, DateCardOverlayComponent],
    imports: [CommonModule, HomePageRoutingModule, CoreModule, SearchBarModule],
})
export class HomePageModule {}