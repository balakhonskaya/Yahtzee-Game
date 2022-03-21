import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

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
  twoScore: number;
  threeScore: number;
  diceArray = [];
  scoreArray = [];
  value: number;
  @Output() newItemEvent = new EventEmitter<[number]>();
  @Input() oneSelected;

  constructor() { }

  getRandom(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  startRoll() {
    this.diceArray = [];
    this.oneScore =0;
    this.twoScore = 0;
    this.threeScore = 0;
    this.scoreArray = [];
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
    
    if (this.oneSelected === true) {
      console.log("Selected "+ this.oneSelected);
    }
    if (this.diceArray.includes(1)) {
      for (let i = 0; i < this.diceArray.length; i++)  {
        if (this.diceArray[i] == 1) {
           this.oneScore ++;
        }
      }
      console.log("value:"+this.oneScore);
     } else { this.oneScore = 0;} 

     if (this.diceArray.includes(2)) {
      for (let i = 0; i < this.diceArray.length; i++)  {
        if (this.diceArray[i] == 2) {
           this.twoScore =this.twoScore +2;
        }
      }
      console.log("value:"+this.twoScore);
     } else { this.twoScore = 0;} 

     if (this.diceArray.includes(3)) {
      for (let i = 0; i < this.diceArray.length; i++)  {
        if (this.diceArray[i] == 3) {
          this.threeScore =this.threeScore +3;
        }
      }
      console.log("value:"+this.threeScore);
     } else { this.threeScore = 0;}

     this.scoreArray.push(this.oneScore);
     this.scoreArray.push(this.twoScore);
     this.scoreArray.push(this.threeScore);
     console.log(this.scoreArray);
     return this.scoreArray;
     
  }

  addNewItem(arrayValue) {
     arrayValue = this.startRoll();
      this.newItemEvent.emit(arrayValue);
      console.log('inside function '+arrayValue);
     }
  
  
 
  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    console.log('ng '+this.oneSelected);
  }
 
}
