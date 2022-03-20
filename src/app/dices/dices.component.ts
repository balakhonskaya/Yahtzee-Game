import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  oneScore: number;
  diceArray = [];
  value: number;
  @Output() newItemEvent = new EventEmitter<number>();
 

  constructor() { }
  getRandom(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /*startRoll(genArray) {
    this.generateArray();
  }*/

  startRoll() {
    this.diceArray = [];
    this.oneScore =0;
    this.dice1 = this.getRandom(1,6);
    this.dice2  = this.getRandom(1,6);
    this.dice3  = this.getRandom(1,6);
    this.dice4  = this.getRandom(1,6);
    this.dice5  = this.getRandom(1,6);
    this.diceArray.push(this.dice1);
    this.diceArray.push(this.dice2);
    this.diceArray.push(this.dice3);
    this.diceArray.push(this.dice4);
    this.diceArray.push(this.dice5);
    console.log(this.diceArray);
    
    if (this.diceArray.includes(1)) {
      for (let i = 0; i < this.diceArray.length; i++)  {
        if (this.diceArray[i] == 1) {
           this.oneScore ++;
        }
      }
      console.log("value:"+this.oneScore);
      return this.oneScore;
     } 
  }

  

  addNewItem(value: number) {
    value = this.startRoll();
      this.newItemEvent.emit(value);
      console.log('inside function '+value);
     }
  
  
 
  ngOnInit(): void {
  }

 
}
