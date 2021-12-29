import { Component, ViewChild } from '@angular/core';

import { products } from "../../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  // @ViewChild('ref') refElem: ElementRef;

  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale!');
  }

  trackByAoiId(idx: number, product: any): number {
    console.log('product', product)
    console.log('id', idx)
    return product.id;
  }
}
