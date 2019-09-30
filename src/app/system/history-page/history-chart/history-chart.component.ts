import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rudkevycho-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent implements OnInit {

  view: any[] = [545, 355];

  data = [
    {
      name: 'Germany',
      value: 8940000
    },
    {
      name: 'USA',
      value: 5000000
    },
    {
      name: 'France',
      value: 7200000
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
