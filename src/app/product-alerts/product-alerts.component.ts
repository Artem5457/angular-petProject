import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {

  // We use this decorator to pass data to a child component
  @Input() product: Product | undefined;
  // Pass data to a parent component
  @Output() notify = new EventEmitter();

}
