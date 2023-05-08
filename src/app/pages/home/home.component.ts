import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
const target = document.querySelector('.tw');
const writer = new Typewriter(target, {
  loop: false,
  typeColor: 'white'
})
/*
Este es mi espacio para mostrar un poco de lo que hago y
      quien
      soy ...
*/
writer
  .type('este es mi espacio, para mostrar un poco lo que hago y quien soy.')
  .rest(500)
  .start()


  }

}
