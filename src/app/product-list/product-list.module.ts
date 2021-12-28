import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../button/button.module";
import { ProductAlertsComponent } from "../product-alerts/product-alerts.component";
import { ProductAlertsModule } from "../product-alerts/product-alerts.module";

import { ProductListRoutingModule } from "./product-list-routing.module";
import { ProductListComponent } from "./product-list.component";
import { ProductPreview } from "./product-preview/product-preview.component";
// import { ButtonComponent } from '../button/button.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductPreview,
        // ButtonComponent
    ],
    imports: [
        CommonModule,
        ProductListRoutingModule,
        ProductAlertsModule,
        ButtonModule
    ],
    exports: []
})
export class ProductListModule {

}
