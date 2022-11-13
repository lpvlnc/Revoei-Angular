import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { PartyCardOverlayComponent } from './party-card-overlay/party-card-overlay.component'
import { PartyCardComponent } from './party-card.component'

@NgModule({
    declarations: [PartyCardComponent, PartyCardOverlayComponent],
    imports: [CommonModule, CoreModule],
    exports: [PartyCardComponent]
})
export class PartyCardModule {}