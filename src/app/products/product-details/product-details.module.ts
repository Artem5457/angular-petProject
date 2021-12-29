import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "src/app/button/button.module";

import { ProductDetailsComponent } from "./product-details.component";
import { ProductDetailsRoutingModule } from "./prouct-details-routing.module";

@NgModule({
    declarations: [ProductDetailsComponent],
    imports: [
        CommonModule,
        ProductDetailsRoutingModule,
        ButtonModule
    ],
    exports: [ProductDetailsComponent]
})
export class ProductDetailsModule {

}
