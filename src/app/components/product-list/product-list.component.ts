import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { products } from '../dummy_data';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  isClicked: boolean = false;
  selected: any = {};
  myName = 'Batbayar';

  prods: Product[] = [];

  constructor() {
    setTimeout(() => {
      console.log('ProductList called');
      this.prods = products;
    }, 2000);
  }

  selectProduct(product: any) {
    this.isClicked = true;
    this.selected = product;
    console.log('selected id: ', this.selected);
  }
}
