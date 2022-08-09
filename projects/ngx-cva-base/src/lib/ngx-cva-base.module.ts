import {NgModule} from '@angular/core';
import {NgxCvaBaseComponent} from './ngx-cva-base.component';
import {WidgetsModule} from "./widgets/widgets.module";

@NgModule({
    declarations: [
        NgxCvaBaseComponent
    ],
    imports: [
        WidgetsModule
    ],
    exports: [
        NgxCvaBaseComponent
    ]
})
export class NgxCvaBaseModule {
}
