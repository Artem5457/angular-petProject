import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShippingRoutingModule } from './shipping-routing.module';

import { ShippingComponent } from './shipping.component';

@NgModule({
    declarations: [ShippingComponent],
    imports: [
        CommonModule,
        ShippingRoutingModule
    ],
    exports: []
})
export class ShippingModule {}