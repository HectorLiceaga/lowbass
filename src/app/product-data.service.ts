import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './lista-prod/products';

const URL ='';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

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
  getData(): Observable<Product[]>{
    return this.http.get<Product[]>(URL);
  }
}
