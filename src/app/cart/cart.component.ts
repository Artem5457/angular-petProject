import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group(
    {
      name: new FormControl("Tom", [Validators.required, Validators.minLength(2)]),
      address: ''
    }
  )

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.checkoutForm.controls['name'].valueChanges.subscribe((values) => {
      console.log('name values', values)
    })
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  navigateToPrices() {
    this.route.navigateByUrl('/shipping');
  }

  doChangeName(): void {
    this.checkoutForm.controls['name'].patchValue('Artem')
  }

}
