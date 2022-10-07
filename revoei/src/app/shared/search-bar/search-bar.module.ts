import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { SearchBarComponent } from './search-bar.component'

@NgModule({
    declarations: [SearchBarComponent],
    imports: [CommonModule, CoreModule],
    exports: [SearchBarComponent]
})
export class SearchBarModule {}