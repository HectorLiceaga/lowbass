import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-prod',
  templateUrl: './lista-prod.component.html',
  styleUrls: ['./lista-prod.component.scss']
})
export class ListaProdComponent implements OnInit {

  instrumento1 = {
    'name': 'Bajo Fender JazzBass',
    'price': 2000,
    'image': 'assets/img/fender-jazz-bass.jpg'
  }
  instrumento2 = {
    'name': 'Guitarra Fender Stratocaster',
    'price': 1500,
    'image': 'src\assets\img\fender-stratocaster.jpg'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
