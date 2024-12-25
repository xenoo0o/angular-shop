import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() innerProduct: Product | undefined;
  @Output() innerSelected = new EventEmitter();

  childSelected() {
    this.innerSelected.emit(this.innerProduct);
  }
}
