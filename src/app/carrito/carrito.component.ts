import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Product } from '../lista-prod/products';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  shopList$: Observable<Product[]>;
  total$: Observable<number>;

  constructor(private cartService: ProductCartService) {
    this.shopList$ = cartService.shopList.asObservable();
    this.total$ = cartService.total.asObservable();
  }

  ngOnInit(): void {
  }

}
