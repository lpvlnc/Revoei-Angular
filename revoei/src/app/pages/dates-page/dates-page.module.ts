import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DatesPageRoutingModule } from './dates-page-routing.module'
import { DatesPageComponent } from './dates-page.component';
import { DateCardComponent } from './date-card/date-card.component';
import { DateCardOverlayComponent } from './date-card-overlay/date-card-overlay.component'

@NgModule({
    declarations: [DatesPageComponent, DateCardComponent, DateCardOverlayComponent],
    imports: [CommonModule, DatesPageRoutingModule],
})
export class DatesPageModule {}