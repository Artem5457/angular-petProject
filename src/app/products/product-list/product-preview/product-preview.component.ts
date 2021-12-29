import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-product-preview',
    templateUrl: './product-preview.component.html'
})
export class ProductPreview {
    @Input() product: any;

    constructor(
        private route: Router
    ) {

    }

    navigate() {
        this.route.navigate(['/products', this.product.id])
    }
}