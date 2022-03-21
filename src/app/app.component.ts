import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yahtzee-game';
  valueScore = [0,0,0,0,0,0];
  totalScore= [0,0,0,0,0,0];

  oneSelected: boolean = false;
  twoSelected: boolean = false;
  threeSelected: boolean = false;
  fourSelected: boolean = false;
  fiveSelected: boolean = false;
  sixSelected: boolean = false;
  Selected = {first: this.oneSelected, second: this.twoSelected, third: this.threeSelected, fourth: this.fourSelected, fifth: this.fiveSelected, sixth: this.sixSelected};
  

  onChangeOneSelect() {
    this.oneSelected = !this.oneSelected;
    this.Selected.first = this.oneSelected;
    console.log(this.oneSelected);
  }

  onChangeTwoSelect() {
    this.twoSelected = !this.twoSelected;
    this.Selected.second = this.twoSelected;
    console.log(this.twoSelected);
  }

  onChangeThreeSelect() {
    this.threeSelected = !this.threeSelected;
    this.Selected.third = this.threeSelected;
    console.log(this.threeSelected);
  }

  onChangeFourSelect() {
    this.fourSelected = !this.fourSelected;
    this.Selected.fourth = this.fourSelected;
    console.log(this.fourSelected);
  }
  onChangeFiveSelect() {
    this.fiveSelected = !this.fiveSelected;
    this.Selected.fifth = this.fiveSelected;
    console.log(this.fiveSelected);
  }
  onChangeSixSelect() {
    this.sixSelected = !this.sixSelected;
    this.Selected.sixth = this.sixSelected;
    console.log(this.sixSelected);
  }

  addItem(NewItem: [number]) {
    this.valueScore = NewItem;
    console.log('app-function'+this.valueScore);
    for (let i = 0; i < this.totalScore.length; i++ ) {
      this.totalScore[i]=this.totalScore[i] + this.valueScore[i];
    }
  }
  ngOnInit(): void {
    console.log('app-selected' + this.Selected.first);
  }
  

}

