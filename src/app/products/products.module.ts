import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductLayoutComponent } from "./components/layout/product-layout.component";
import { ProductDetailsModule } from "./product-details/product-details.module";
import { ProductListModule } from "./product-list/product-list.module";
import { ProductsRoutingModule } from "./products.routing.module";

@NgModule({
    declarations: [ProductLayoutComponent],
    imports: [
        CommonModule,
        ProductListModule,
        ProductsRoutingModule,
        ProductDetailsModule
    ],
    exports: []
})

export class ProductsModule {

}
