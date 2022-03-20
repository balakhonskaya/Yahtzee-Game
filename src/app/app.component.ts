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
  sum: number;

  addItem(NewItem: [number]) {
    this.valueScore = NewItem;
    console.log('app-function'+this.valueScore);
    for (let i = 0; i < 3; i++ ) {
      this.totalScore[i]=this.totalScore[i] + this.valueScore[i];
    }
  }


}
