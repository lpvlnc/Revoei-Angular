import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PartyHousePageComponent } from './party-house-page.component'

const routes: Routes = [{ path: '', component: PartyHousePageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PartyHousePageRoutingModule {}