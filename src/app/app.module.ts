import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListModule } from './product-list/product-list.module';
// import { ButtonComponent } from './button/button.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { ProductDetailsModule } from './product-details/product-details.module';
// import { CartModule } from './cart/cart.module';
// import { ShippingModule } from './shipping/shipping.module';
// import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { CartComponent } from './cart/cart.component';
// import { ShippingComponent } from './shipping/shipping.component';
// import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    // ProductListComponent,
    TopBarComponent,
    // ProductAlertsComponent,
    // ProductDetailsComponent,
    // CartComponent,
    // ShippingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductListModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '',
        loadChildren: () => import('./product-list/product-list.module').then((m) => {
          return m.ProductListModule;
        })
      },
      { 
        path: 'products/:productId',
        loadChildren: () => import('./product-details/product-details.module').then((m) => {
          return m.ProductDetailsModule;
        })
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then((m) => {
          console.log('M', m);
          return m.CartModule;
        }),
      },
      {
        path: 'shipping',
        loadChildren: () => import('./shipping/shipping.module').then((m) => {
          return m.ShippingModule;
        })
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
