import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements AfterViewInit {

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
      labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun',],
      datasets: [
        {
          label: 'Vishal',
          data: [80, 50, 30, 40, 95, 20],
          backgroundColor: [this.colors.primary],
        },
        {
          label: 'Parag',
          data: [20, 30, 40, 80, 20, 80],
          backgroundColor: [this.colors.secondary],
        }
      ]
    }
    let options = {}
    new Chart(this.ctx, {
      type: 'radar',
      data: data,
      options: options
    })
  }
}
