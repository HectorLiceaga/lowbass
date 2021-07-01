import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor(private cartService: ProductCartService) { }

  ngOnInit(): void {
  }

}
