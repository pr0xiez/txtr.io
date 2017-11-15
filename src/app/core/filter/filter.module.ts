import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { FilterComponent } from './filter.component';

@NgModule({
    imports: [FilterComponent, SharedModule],
    exports: [],
    declarations: [FilterComponent],
    providers: [],
})
export class FilterModule { }
