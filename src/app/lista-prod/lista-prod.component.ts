import { Component, OnInit } from '@angular/core';
import { Instrument } from './products';

@Component({
  selector: 'app-lista-prod',
  templateUrl: './lista-prod.component.html',
  styleUrls: ['./lista-prod.component.scss']
})
export class ListaProdComponent implements OnInit {

  //Mock
  instruments: Instrument[] = [
  {
    name: 'Bajo Fender JazzBass',
    description: 'Bajo hecho en mexico, un sonido elegido por los mejores, con la calidad reconocida de Fender',
    price: 2000,
    image: 'assets/img/fender-jazz-bass.jpg',
    stock: 5,
    forSale: true,
  },
  {
    name: 'Guitarra Fender Stratocaster',
    description: 'Guitarra versatil. Ideal para aprender con un producto de excelente calidad',
    price: 1500,
    image: 'assets\img\fender-stratocaster.jpg',
    stock: 2,
    forSale: false, 
  },
  {
    name: 'Guitarra Fender Telecaster',
    description: 'Terrible guitarra, un sonido ideado en los 50´s. Ideal para para rockear con todo',
    price: 1100,
    image: 'assets\img\fender-telecaster.jpg',
    stock: 0,
    forSale: false,
  },  
  {
    name: 'Guitarra PRS',
    description: 'La de Santana, Cerati.Nada más que agregar',
    price: 3500,
    image: 'assets\img\prs.jpeg',
    stock: 0,
    forSale: false,
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
