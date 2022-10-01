import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ProfilePageRoutingModule } from './profile-page-routing.module'
import { ProfilePageComponent } from './profile-page.component'

@NgModule({
    declarations: [ProfilePageComponent],
    imports: [CommonModule, ProfilePageRoutingModule],
})
export class ProfilePageModule {}