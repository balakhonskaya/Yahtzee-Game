import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yahtzee-game';
  valueScore: number;
  totalScore: number = 2;
  sum: number;

  addItem(NewItem: number) {
    this.valueScore = NewItem;
    console.log('app-function'+this.valueScore);
    if (this.valueScore > 0) {
    this.totalScore = this.totalScore + this.valueScore;
    }
  }


}
