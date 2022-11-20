import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DatesPageRoutingModule } from './dates-page-routing.module'
import { DatesPageComponent } from './dates-page.component';
import { CoreModule } from '@core/core.module';
import { TitleModule } from '@shared/title/title.module';

@NgModule({
    declarations: [DatesPageComponent],
    imports: [CommonModule, DatesPageRoutingModule, CoreModule, TitleModule],
})
export class DatesPageModule {}