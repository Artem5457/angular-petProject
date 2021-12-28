import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ProductDetailsComponent } from "./product-details.component";
import { ProductDetailsRoutingModule } from "./prouct-details-routing.module";

@NgModule({
    declarations: [ProductDetailsComponent],
    imports: [
        CommonModule,
        ProductDetailsRoutingModule
    ],
    exports: [ProductDetailsComponent]
})
export class ProductDetailsModule {

}
