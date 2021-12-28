import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {CartRoutingModule} from './cart-routing.module';
import {CartComponent} from './cart.component';

@NgModule({
    declarations: [CartComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CartRoutingModule
    ],
    exports: [CartComponent]
})
export class CartModule {
    
}