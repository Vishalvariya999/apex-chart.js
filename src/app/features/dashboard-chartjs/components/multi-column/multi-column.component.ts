import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-multi-column',
  templateUrl: './multi-column.component.html',
  styleUrls: ['./multi-column.component.scss']
})
export class MultiColumnComponent implements AfterViewInit {

  @ViewChild('myChart') myChart!: ElementRef;
  public canvas!: any;
  public ctx!: any;
  private colors: any = {};

  constructor() {
    this.colors.primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    this.colors.secondary = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();
    this.colors.tertiary = getComputedStyle(document.documentElement).getPropertyValue('--tertiary').trim();
    this.colors.quaternary = getComputedStyle(document.documentElement).getPropertyValue('--quaternary').trim();
  }

  ngAfterViewInit(): void {
    this.initChart();
  }


  private initChart() {
    this.canvas = this.myChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    let data: any = {
      labels: ['Vishal', 'Parag', 'Arvind', 'Dharmik', 'Jaydeep', 'Pratik', 'Ramesh'],
      datasets: [
        {
          fill: false,
          label: 'Maths',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [this.colors.primary],
          borderWidth: 1,
          barThickness: 50,
          borderRadius: 20
        },
        {
          fill: false,
          label: 'Science',
          data: [60, 55, 70, 55, 50, 45, 30],
          backgroundColor: [this.colors.secondary],
          borderWidth: 1,
          barThickness: 50,
          borderRadius: 20
        }
      ]
    }
    let options: any = {
      scales: {
        y: {
          beginAtZero: true,
          display: true,
          title: {
            display: true,
            text: 'Marks',
            padding: { top: 30, left: 0, right: 0, bottom: 0 }
          }
        },
        x: {
          display: true,
          title: {
            display: true,
            text: 'Name',
            padding: { top: 10, left: 0, right: 0, bottom: 0 }
          }
        }
      },
      legend: {
        display: true
      },
    }
    new Chart(this.ctx, {
      type: 'bar',
      data: data,
      options: options
    })
  }
}

