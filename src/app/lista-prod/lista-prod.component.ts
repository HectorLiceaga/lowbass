import { Component, OnInit } from '@angular/core';
import { Product } from './products';

@Component({
  selector: 'app-lista-prod',
  templateUrl: './lista-prod.component.html',
  styleUrls: ['./lista-prod.component.scss']
})
export class ListaProdComponent implements OnInit {

  //Mock
  products: Product[] = [
    {
      name: 'Pua de guitarra',
      price: 20,
      image: '..\assets\img\puaGuitarra.png',
      stock: 5,
      forSale: true,
      quantity: 0,
    },
    {
      name: 'Pua de bajo',
      price: 30,
      image: '..\assets\img\puaBajo.jpg',
      stock: 2,
      forSale: false,
      quantity: 0,
    },
    {
      name: 'Correa de cuero guitarra',
      price: 2100,
      image: 'src\assets\img\correaCueroGuitar.jpg',
      stock: 0,
      forSale: false,
      quantity: 0,
    },
    {
      name: 'Correa de cuero bajo',
      price: 3500,
      image: 'src\assets\img\correaCueroBass.jpg',
      stock: 0,
      forSale: false,
      quantity: 0,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(product: Product): void {
    if (product.quantity <= product.stock)
      product.quantity++;
  }

  downQuantity(product: Product): void {
    if (product.quantity > 0)
      product.quantity--;
  }
}
