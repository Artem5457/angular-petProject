import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';

import {CartRoutingModule} from './cart-routing.module';
import {CartComponent} from './cart.component';

@NgModule({
    declarations: [CartComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CartRoutingModule,
        ButtonModule
    ],
    exports: [CartComponent]
})
export class CartModule {
    
}