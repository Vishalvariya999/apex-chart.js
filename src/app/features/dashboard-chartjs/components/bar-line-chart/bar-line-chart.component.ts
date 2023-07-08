import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-bar-line-chart',
  templateUrl: './bar-line-chart.component.html',
  styleUrls: ['./bar-line-chart.component.scss']
})
export class BarLineChartComponent implements AfterViewInit {

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

    let data = {
      labels: ['Vishal', 'Parag', 'Arvind', 'Dharmik', 'Jaydeep', 'Pratik', 'Chiman'],
      datasets: [
        {
          axis: 'y',
          fill: false,
          label: 'Maths',
          data: [65, 59, 80, 81, 74, 55],
          backgroundColor: [this.colors.primary],
          borderWidth: 2,
          barPercentage: 0.5,
          barThickness: 70,
          borderRadius: 15
        }
      ]
    }
    let options: any = {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Name',
            padding: { top: 20, left: 0, right: 0, bottom: 0 }
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Marks',
            padding: { top: 30, left: 0, right: 0, bottom: 0 }
          }
        }
      }
    }
    new Chart(this.ctx, {
      type: 'bar',
      data: data,
      options: options
    })
  }

}
