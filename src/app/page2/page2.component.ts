import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { partition } from 'rxjs';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  constructor(private _router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    let jsonData = JSON.parse(localStorage.getItem('jsonData'));
    // console.log(jsonData);
    let chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: '',
      },
      axisY: { title: 'Parts' },
      axisX: { title: 'Machine' },
      data: [
        {
          type: 'column',
          dataPoints: [
            {
              y: parseInt(jsonData.plant_data[0].parts),
              label: jsonData.plant_data[0].machine,
            },
            {
              y: parseInt(jsonData.plant_data[1].parts),
              label: jsonData.plant_data[1].machine,
            },
            {
              y: parseInt(jsonData.plant_data[2].parts),
              label: jsonData.plant_data[2].machine,
            },
          ],
        },
      ],
    });

    chart.render();

    let chart2 = new CanvasJS.Chart('chartContainer2', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: '',
      },
      axisY: { title: 'Time' },
      axisX: { title: 'Machine' },
      data: [
        {
          type: 'line',
          dataPoints: [
            {
              y: parseInt(jsonData.plant_data[0].time),
              label: jsonData.plant_data[0].machine,
            },
            {
              y: parseInt(jsonData.plant_data[1].time),
              label: jsonData.plant_data[1].machine,
            },
            {
              y: parseInt(jsonData.plant_data[2].time),
              label: jsonData.plant_data[2].machine,
            },
          ],
        },
      ],
    });

    chart2.render();
  }

  toPage1() {
    this._router.navigate(['page1']);
  }

  toPage2() {
    this._router.navigate(['page2', { jsonData: 'jsonData2' }]);
  }
}
