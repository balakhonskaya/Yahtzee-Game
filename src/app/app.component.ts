import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'yahtzee-game';
  valueScore = [0,0,0];
  totalScore= [0,0,0];
  oneSelected: boolean = true;
  twoSelected: boolean = true;
  threeSelected: boolean = true;
  Selected = {first: this.oneSelected, second: this.twoSelected, third: this.threeSelected};
  

  onChangeOneSelect() {
    this.oneSelected = !this.oneSelected;
    console.log(this.oneSelected);
  }

  onChangeTwoSelect() {
    this.twoSelected = !this.twoSelected;
    console.log(this.twoSelected);
  }

  onChangeThreeSelect() {
    this.threeSelected = !this.threeSelected;
    console.log(this.threeSelected);
  }

  addItem(NewItem: [number]) {
    this.valueScore = NewItem;
    console.log('app-function'+this.valueScore);
    for (let i = 0; i < 3; i++ ) {
      this.totalScore[i]=this.totalScore[i] + this.valueScore[i];
    }
  }
  ngOnInit(): void {
    console.log('app-selected' + this.Selected.first);
  }
  

}

