import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-product-preview',
    templateUrl: './product-preview.component.html'
})
export class ProductPreview {
    @Input() product: any;
}