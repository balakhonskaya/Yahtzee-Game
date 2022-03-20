import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  valueScore: number = 0;

  addItem(newItem: number) {
    this.valueScore = newItem;
    console.log('app-function'+this.valueScore);
  }  


  constructor() { }

  ngOnInit(): void {
  }

}
