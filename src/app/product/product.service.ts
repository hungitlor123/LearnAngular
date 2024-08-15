import { Injectable } from '@angular/core';
import { Product } from './product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products: Product[] = [];

  get products(): Product[] {
    return this._products;
  }

  constructor() {
    this.initProducts();
  }
  initProducts() {
    this._products = [
      {
        id: 'P001',
        name: 'Wireless Headphones',
        thumbnailUrl: 'https://example.com/images/headphones.jpg',
        description:
          'High-quality wireless headphones with noise-cancelling feature.',
        quantity: 50,
        price: 150.99,
        status: 'In Stock',
      },
      {
        id: 'P002',
        name: 'Smartphone',
        thumbnailUrl: 'https://example.com/images/smartphone.jpg',
        description:
          'Latest model smartphone with a powerful processor and stunning display.',
        quantity: 30,
        price: 799.99,
        status: 'In Stock',
      },
      {
        id: 'P003',
        name: 'Gaming Laptop',
        thumbnailUrl: 'https://example.com/images/laptop.jpg',
        description:
          'High-performance gaming laptop with dedicated graphics card.',
        quantity: 20,
        price: 1199.99,
        status: 'Out of Stock',
      },
      {
        id: 'P004',
        name: 'Smartwatch',
        thumbnailUrl: 'https://example.com/images/smartwatch.jpg',
        description:
          'Water-resistant smartwatch with health tracking features.',
        quantity: 70,
        price: 199.99,
        status: 'In Stock',
      },
      {
        id: 'P005',
        name: 'Bluetooth Speaker',
        thumbnailUrl: 'https://example.com/images/speaker.jpg',
        description:
          'Portable Bluetooth speaker with deep bass and long battery life.',
        quantity: 40,
        price: 89.99,
        status: 'In Stock',
      },
    ];
  }
  deleteProduct(id: string) {
    this._products = this._products.filter((product) => product.id !== id);
  }
}
