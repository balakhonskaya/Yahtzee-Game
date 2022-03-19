import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.css']
})
export class DicesComponent implements OnInit {
  dice1: number;
  dice2: number;
  dice3: number;
  dice4: number;
  dice5: number;

  constructor() { }
  getRandom(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  startRoll() {
    this.dice1 = this.getRandom(1,6);
    this.dice2  = this.getRandom(1,6);
    this.dice3  = this.getRandom(1,6);
    this.dice4  = this.getRandom(1,6);
    this.dice5  = this.getRandom(1,6);
  }

  ngOnInit(): void {
    
  }

 
  

}
