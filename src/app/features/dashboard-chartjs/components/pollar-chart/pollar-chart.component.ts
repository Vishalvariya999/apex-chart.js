import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pollar-chart',
  templateUrl: './pollar-chart.component.html',
  styleUrls: ['./pollar-chart.component.scss']
})
export class PollarChartComponent implements AfterViewInit {

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
      labels: ['Vishal', 'Parag', 'Arvind', 'Dharmik',],
      datasets: [
        {
          axis: 'y',
          fill: false,
          label: 'Maths',
          data: [10, 15, 20, 23],
          backgroundColor: [this.colors.primary, this.colors.secondary, this.colors.tertiary, this.colors.quaternary],
          borderWidth: 2,
          barPercentage: 0.5,
          barThickness: 70
        }
      ]
    }
    let options = {}
    new Chart(this.ctx, {
      type: 'polarArea',
      data: data,
      options: options
    })
  }
}
