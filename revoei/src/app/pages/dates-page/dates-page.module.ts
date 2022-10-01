import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DatesPageRoutingModule } from './dates-page-routing.module'
import { DatesPageComponent } from './dates-page.component'

@NgModule({
    declarations: [DatesPageComponent],
    imports: [CommonModule, DatesPageRoutingModule],
})
export class DatesPageModule {}