import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductLayoutComponent } from "./components/layout/product-layout.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
    {
        path: '', component: ProductLayoutComponent, children: [
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: ':productId',
                loadChildren: () => import('./product-details/product-details.module').then((m) => {
                    return m.ProductDetailsModule;
                })
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule {

}
