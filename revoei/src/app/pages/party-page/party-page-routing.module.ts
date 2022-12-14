import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PartyPageComponent } from './party-page.component'

const routes: Routes = [{ path: '', component: PartyPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PartyPageRoutingModule {}