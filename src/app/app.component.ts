import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yahtzee-game';
  valueScore = [0,0,0,0,0,0,0,0];
  totalScore= [0,0,0,0,0,0,0,0];

  oneSelected: boolean = false;
  twoSelected: boolean = false;
  threeSelected: boolean = false;
  fourSelected: boolean = false;
  fiveSelected: boolean = false;
  sixSelected: boolean = false;
  threeKindSelected: boolean = false;
  fourKindSelected: boolean = false;
  selectedOption: boolean;
  Selected = {0: this.oneSelected, 1: this.twoSelected, 2: this.threeSelected, 3: this.fourSelected, 4: this.fiveSelected, 5: this.sixSelected, 6: this.threeKindSelected, 7: this.fourKindSelected};
  
  /*
  onChangeSelect(selectedOption) {
    this.selectedOption = !this.selectedOption;
    console.log("change func"+ this.selectedOption);
    let searchName = selectedOption;
    let index = this.Selected.map(el => el.name).indexOf(searchName);
    this.Selected[0] = this.selectedOption;
  }*/
  
  onChangeOneSelect() {
    this.oneSelected = !this.oneSelected;
    this.Selected[0] = this.oneSelected;
    console.log(this.oneSelected);
  }

  onChangeTwoSelect() {
    this.twoSelected = !this.twoSelected;
    this.Selected[1] = this.twoSelected;
    console.log(this.twoSelected);
  }

  onChangeThreeSelect() {
    this.threeSelected = !this.threeSelected;
    this.Selected[2] = this.threeSelected;
    console.log(this.threeSelected);
  }

  onChangeFourSelect() {
    this.fourSelected = !this.fourSelected;
    this.Selected[3] = this.fourSelected;
    console.log(this.fourSelected);
  }
  onChangeFiveSelect() {
    this.fiveSelected = !this.fiveSelected;
    this.Selected[4] = this.fiveSelected;
    console.log(this.fiveSelected);
  }
  onChangeSixSelect() {
    this.sixSelected = !this.sixSelected;
    this.Selected[5] = this.sixSelected;
    console.log(this.sixSelected);
  }

  onChangeThreeKindSelect() {
    this.threeKindSelected = !this.threeKindSelected;
    this.Selected[6] = this.threeKindSelected;
    console.log(this.threeKindSelected);
  }

  onChangeFourKindSelect() {
    this.fourKindSelected = !this.fourKindSelected;
    this.Selected[7] = this.fourKindSelected;
    console.log(this.fourKindSelected);
  }

  addItem(NewItem: [number]) {
    this.valueScore = NewItem;
    console.log('app-function'+this.valueScore);
    for (let i = 0; i < this.totalScore.length; i++ ) {
      this.totalScore[i]=this.totalScore[i] + this.valueScore[i];
    }
  }
  ngOnInit(): void {
    //console.log('app-selected' + this.Selected.first);
  }
  

}

