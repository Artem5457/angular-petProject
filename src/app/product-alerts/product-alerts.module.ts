import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../button/button.module";
import { ProductAlertsComponent } from "./product-alerts.component";

@NgModule({
    declarations: [ProductAlertsComponent],
    imports: [
        CommonModule,
        ButtonModule
    ],
    exports: [ProductAlertsComponent]
})

export class ProductAlertsModule {

}
