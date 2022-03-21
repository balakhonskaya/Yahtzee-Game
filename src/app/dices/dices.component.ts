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
  fourScore: number;
  fiveScore: number;
  sixScore: number;
  diceArray = [];
  scoreArray = [];
  value: number;
  @Output() newItemEvent = new EventEmitter<[number]>();
  @Input() Selected: {first: boolean; second: boolean; third: boolean, fourth: boolean, fifth: boolean, sixth: boolean};

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
    this.fourScore =0;
    this.fiveScore = 0;
    this.sixScore = 0;
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
    
    if (this.Selected.first == true) {
      console.log("Selected first"+ this.Selected.first);
      if (this.diceArray.includes(1)) {
        for (let i = 0; i < this.diceArray.length; i++)  {
          if (this.diceArray[i] == 1) {
             this.oneScore ++;
          }
        }
        console.log("value1 :"+this.oneScore);
       } else { this.oneScore = 0;}
    } else { this.oneScore = 0;}
     
    if (this.Selected.second == true) {
     if (this.diceArray.includes(2)) {
      for (let i = 0; i < this.diceArray.length; i++)  {
        if (this.diceArray[i] == 2) {
           this.twoScore =this.twoScore +2;
        }
      }
      console.log("value2:"+this.twoScore);
     } else { this.twoScore = 0;} 
    }
    if (this.Selected.third == true) {
     if (this.diceArray.includes(3)) {
      for (let i = 0; i < this.diceArray.length; i++)  {
        if (this.diceArray[i] == 3) {
          this.threeScore =this.threeScore +3;
        }
      }
      console.log("value3:"+this.threeScore);
     } else { this.threeScore = 0;}
    }

    if (this.Selected.fourth == true) {
      if (this.diceArray.includes(4)) {
       for (let i = 0; i < this.diceArray.length; i++)  {
         if (this.diceArray[i] == 4) {
           this.fourScore =this.fourScore +4;
         }
       }
       console.log("value4:"+this.fourScore);
      } else { this.fourScore = 0;}
     }

     if (this.Selected.fifth == true) {
      if (this.diceArray.includes(5)) {
       for (let i = 0; i < this.diceArray.length; i++)  {
         if (this.diceArray[i] == 5) {
           this.fiveScore =this.fiveScore +5;
         }
       }
       console.log("value5:"+this.fiveScore);
      } else { this.fiveScore = 0;}
     }

     if (this.Selected.sixth == true) {
      if (this.diceArray.includes(6)) {
       for (let i = 0; i < this.diceArray.length; i++)  {
         if (this.diceArray[i] == 6) {
           this.sixScore =this.sixScore +6;
         }
       }
       console.log("value6:"+this.sixScore);
      } else { this.sixScore = 0;}
     }

     this.scoreArray.push(this.oneScore);
     this.scoreArray.push(this.twoScore);
     this.scoreArray.push(this.threeScore);
     this.scoreArray.push(this.fourScore);
     this.scoreArray.push(this.fiveScore);
     this.scoreArray.push(this.sixScore);
     console.log(this.scoreArray);
     return this.scoreArray;
     
  }

  addNewItem(arrayValue) {
     arrayValue = this.startRoll();
      this.newItemEvent.emit(arrayValue);
      console.log('inside function '+arrayValue);
     }
  
  
 
  ngOnInit(): void {
    //console.log("Selected:" + this.Selected.first)
    //console.log('dices 1 '+this.Selected[1]);
    //console.log('dices 2 '+this.Selected[2]);
    //console.log('dices 3 '+this.Selected[3]);
  }


    
 
}
