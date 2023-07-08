import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-gender-chartjs',
  templateUrl: './gender-chartjs.component.html',
  styleUrls: ['./gender-chartjs.component.scss']
})
export class GenderChartjsComponent implements AfterViewInit {

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
      labels: ['Male', 'Female', 'Other'],
      datasets: [
        {
          data: [65, 59, 80],
          backgroundColor: [this.colors.primary, this.colors.secondary, this.colors.tertiary],
        },
      ]
    }
    let options: any = {
      legend: {
        display: true,
        position: 'right',
        onClick: null
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false,
          }
        }
      }
    }
    new Chart(this.ctx, {
      type: 'doughnut',
      data: data,
      options: options
    })
  }
}
