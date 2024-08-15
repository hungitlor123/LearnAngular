import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.products = this._productService.products;

    console.log(this.products);
  }
  deleteProduct(id: string) {
    this._productService.deleteProduct(id);
    this.products = this._productService.products;
  }
}
