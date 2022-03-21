import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yahtzee-game';
  valueScore = [0,0,0];
  totalScore= [0,0,0];
  oneSelected: boolean = false;
  twoSelected: boolean = false;
  threeSelected: boolean = false;
  sum: number;

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


}
