import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../../assets/data.json';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  constructor(private _router: Router) {}

  jsonData: any = (data as any).default;

  ngOnInit(): void {
    localStorage.setItem('jsonData', JSON.stringify(this.jsonData));
  }

  setParts(no: any, value: any) {
    this.jsonData.plant_data[no - 1].parts = parseInt(value);
  }

  setTime(no: any, value: any) {
    this.jsonData.plant_data[no - 1].time = parseInt(value);
  }

  toPage1() {
    this._router.navigate(['page1']);
  }

  toPage2() {
    localStorage.setItem('jsonData', JSON.stringify(this.jsonData));
    this._router.navigate(['page2']);
  }

  saveData(): void {
    localStorage.setItem('jsonData', JSON.stringify(this.jsonData));
  }
}
