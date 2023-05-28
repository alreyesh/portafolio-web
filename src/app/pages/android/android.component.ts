import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class AndroidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw');
      const writer = new Typewriter(target, {
        loop: false,
        typeColor: 'white'
      })
        writer
  .type('Android')
  .rest(500)
  .start()

  }

}
