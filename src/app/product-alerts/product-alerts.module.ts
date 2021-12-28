import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductAlertsComponent } from "./product-alerts.component";

@NgModule({
    declarations: [ProductAlertsComponent],
    imports: [
        CommonModule
    ],
    exports: [ProductAlertsComponent]
})

export class ProductAlertsModule {

}
