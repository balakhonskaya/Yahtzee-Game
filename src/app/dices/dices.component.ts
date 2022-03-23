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
  threeKindScore: number;
  fourKindScore: number;
  diceArray = [];
  scoreArray = [];
  //indexArray = [];
  value: number;
  @Output() newItemEvent = new EventEmitter<[number]>();
  @Input() Selected: {0: boolean; 1: boolean; 2: boolean, 3: boolean, 4: boolean, 5: boolean, 6: boolean, 7: boolean};

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
    this.threeKindScore = 0;
    this.fourKindScore = 0;
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
    
    if (this.Selected[0] == true) {
      //console.log("Selected first"+ this.Selected.first);
      if (this.diceArray.includes(1)) {
        for (let i = 0; i < this.diceArray.length; i++)  {
          if (this.diceArray[i] == 1) {
             this.oneScore ++;
          }
        }
        console.log("value1 :"+this.oneScore);
       } else { this.oneScore = 0;}
    } else { this.oneScore = 0;}
     
    if (this.Selected[1] == true) {
     if (this.diceArray.includes(2)) {
      for (let i = 0; i < this.diceArray.length; i++)  {
        if (this.diceArray[i] == 2) {
           this.twoScore =this.twoScore +2;
        }
      }
      console.log("value2:"+this.twoScore);
     } else { this.twoScore = 0;} 
    }
    if (this.Selected[2] == true) {
     if (this.diceArray.includes(3)) {
      for (let i = 0; i < this.diceArray.length; i++)  {
        if (this.diceArray[i] == 3) {
          this.threeScore =this.threeScore +3;
        }
      }
      console.log("value3:"+this.threeScore);
     } else { this.threeScore = 0;}
    }

    if (this.Selected[3] == true) {
      if (this.diceArray.includes(4)) {
       for (let i = 0; i < this.diceArray.length; i++)  {
         if (this.diceArray[i] == 4) {
           this.fourScore =this.fourScore +4;
         }
       }
       console.log("value4:"+this.fourScore);
      } else { this.fourScore = 0;}
     }

     if (this.Selected[4] == true) {
      if (this.diceArray.includes(5)) {
       for (let i = 0; i < this.diceArray.length; i++)  {
         if (this.diceArray[i] == 5) {
           this.fiveScore =this.fiveScore +5;
         }
       }
       console.log("value5:"+this.fiveScore);
      } else { this.fiveScore = 0;}
     }

     if (this.Selected[5] == true) {
      if (this.diceArray.includes(6)) {
       for (let i = 0; i < this.diceArray.length; i++)  {
         if (this.diceArray[i] == 6) {
           this.sixScore =this.sixScore +6;
         }
       }
       console.log("value6:"+this.sixScore);
      } else { this.sixScore = 0;}
     }
     //3 of a kind
     if (this.Selected[6] == true) {
      
       for (let j=1; j<7; j++) {
            let indexArray = [];
            let index = this.diceArray.indexOf(j);
            //console.log("index"+index);
            //this.threeKindScore = this.threeKindScore + this.diceArray[i];
            while (index != - 1) {
              indexArray.push(index);
              index = this.diceArray.indexOf(j, index+1);
              console.log('indexArray'+ indexArray);
            }
            if (indexArray.length !== 3 ) {
              console.log('this is not 3 kind');
              this.threeKindScore = 0;
              
               } else {
                 console.log("3kind yes");
                for (let i=0; i< this.diceArray.length; i++) {
                this.threeKindScore = this.threeKindScore + this.diceArray[i];
                }
                break;
                } 
              }
        }

        //4 of a kind

        if (this.Selected[7] == true) {
      
          for (let j=1; j<7; j++) {
               let indexArray = [];
               let index = this.diceArray.indexOf(j);
               //console.log("index"+index);
               //this.threeKindScore = this.threeKindScore + this.diceArray[i];
               while (index != - 1) {
                 indexArray.push(index);
                 index = this.diceArray.indexOf(j, index+1);
                 console.log('indexArray'+ indexArray);
               }
               if (indexArray.length !== 4 ) {
                 console.log('this is not 4 kind');
                 this.fourKindScore = 0;
                 
                  } else {
                    console.log("4kind yes");
                   for (let i=0; i< this.diceArray.length; i++) {
                   this.fourKindScore = this.fourKindScore + this.diceArray[i];
                   }
                   break;
                   } 
                 }
           }
   
     this.scoreArray.push(this.oneScore);
     this.scoreArray.push(this.twoScore);
     this.scoreArray.push(this.threeScore);
     this.scoreArray.push(this.fourScore);
     this.scoreArray.push(this.fiveScore);
     this.scoreArray.push(this.sixScore);
     this.scoreArray.push(this.threeKindScore);
     this.scoreArray.push(this.fourKindScore);
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

 
}
