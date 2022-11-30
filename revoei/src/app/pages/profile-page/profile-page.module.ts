import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { ButtonModule } from '@shared/button/button.module'
import { InputModule } from '@shared/input/input.module'
import { TitleModule } from '@shared/title/title.module'
import { ProfilePageRoutingModule } from './profile-page-routing.module'
import { ProfilePageComponent } from './profile-page.component'

@NgModule({
    declarations: [ProfilePageComponent],
    imports: [CommonModule, CoreModule, ProfilePageRoutingModule, TitleModule, ButtonModule, InputModule],
})
export class ProfilePageModule {}