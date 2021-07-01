import { Injectable } from '@angular/core';
import { Product } from './lista-prod/products';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  
  constructor() { }

  shopList: Product[] = [];

  addToCart(product: Product) {
    this.shopList.push(product);
  }

}
