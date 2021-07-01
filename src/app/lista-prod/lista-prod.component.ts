import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './products';

@Component({
  selector: 'app-lista-prod',
  templateUrl: './lista-prod.component.html',
  styleUrls: ['./lista-prod.component.scss']
})
export class ListaProdComponent implements OnInit {

  constructor(
    private cartService: ProductCartService,
    private prodService: ProductDataService,
    ) { }

    
    //Mock
    products: Product[] = [
      {
        name: 'Pua de guitarra',
        price: 20,
        image: 'assets/img/puaGuitarra.png',
        stock: 5,
        forSale: true,
        quantity: 0,
      },
      {
        name: 'Pua de bajo',
        price: 30,
        image: 'assets/img/puaBajo.jpg',
        stock: 2,
        forSale: false,
        quantity: 0,
      },
      {
        name: 'Correa de cuero guitarra',
        price: 2100,
        image: 'assets/img/correaCueroGuitar.jpg',
        stock: 9,
        forSale: true,
        quantity: 0,
      },
      {
        name: 'Correa de cuero bajo',
        price: 3500,
        image: 'assets/img/correaCueroBass.jpg',
        stock: 0,
        forSale: false,
        quantity: 0,
      }
    ]

  ngOnInit(): void {
  }

  maxReached(m: string) {
    alert(m);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }
}
