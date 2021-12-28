import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit, OnDestroy {
  shippingCosts$: Observable<any> = this.cartService.getShippingPrices();
  shippingCosts = null;
  shippingCostsSubs = new Subscription();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.shippingCostsSubs.add(this.shippingCosts$.subscribe((shippingCosts) => {
      this.shippingCosts = shippingCosts
    }))
  }

  ngOnDestroy(): void {
    this.shippingCostsSubs.unsubscribe();
  }
}
