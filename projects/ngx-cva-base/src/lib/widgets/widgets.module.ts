import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicInputComponent} from "./basic-input/basic-input.component";
import {NumberInputComponent} from "./number-input/number-input.component";
import {SelectComponent} from "./select/select.component";
import {TriangleButtonComponent} from "./triangle-button/triangle-button.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {IMaskModule} from "angular-imask";
import {MatInputModule} from "@angular/material/input";

@NgModule({
    declarations: [
        BasicInputComponent,
        NumberInputComponent,
        SelectComponent,
        TriangleButtonComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatSelectModule,
        TranslateModule,
        ReactiveFormsModule,
        MatIconModule,
        IMaskModule,
        MatInputModule
    ],
    exports: [
        BasicInputComponent,
    ]
})
export class WidgetsModule {
}