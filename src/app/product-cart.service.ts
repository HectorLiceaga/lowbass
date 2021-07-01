import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './lista-prod/products';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  constructor() { }

  private _shopList: Product[] = []; 
  _total = 0;

  shopList: BehaviorSubject<Product[]> = new BehaviorSubject(this._shopList);
  total: BehaviorSubject<number> = new BehaviorSubject(this._total);

  addToCart(product: Product) {
    let item: Product | undefined = this._shopList.find((p1) => p1.name == product.name);
    if (!item) {
      this._shopList.push({ ...product });
      this._total = this._shopList.reduce((a, c) => c.price * c.quantity + a, 0);
    } else {
      item.quantity += product.quantity;
    }
    this.shopList.next(this._shopList);
    this.total.next(this._total);
  }

}
