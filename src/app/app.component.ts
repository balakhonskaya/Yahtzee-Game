import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yahtzee-game';
  valueScore: number;
  totalScore: number = 0;

  addItem(NewItem: number) {
    this.valueScore = NewItem;
    console.log('app-function'+this.valueScore);
  }

}
