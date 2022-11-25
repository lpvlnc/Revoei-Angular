import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DatesPageRoutingModule } from './dates-page-routing.module'
import { DatesPageComponent } from './dates-page.component';
import { CoreModule } from '@core/core.module';
import { TitleModule } from '@shared/title/title.module';
import { DatesDetailsComponent } from './dates-details/dates-details.component';

@NgModule({
    declarations: [DatesPageComponent, DatesDetailsComponent],
    imports: [CommonModule, DatesPageRoutingModule, CoreModule, TitleModule],
})
export class DatesPageModule {}