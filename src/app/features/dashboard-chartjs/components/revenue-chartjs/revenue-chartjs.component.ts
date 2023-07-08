import { AfterViewInit, ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-revenue-chartjs',
  templateUrl: './revenue-chartjs.component.html',
  styleUrls: ['./revenue-chartjs.component.scss']
})
export class RevenueChartjsComponent implements AfterViewInit {

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
      labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July'],
      datasets: [
        {
          label: 'Revenue',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [this.colors.primary],
          stack: 'combined',
          type: 'bar',
          borderWidth: 1,
          barThickness: 50,
        },
        {
          label: 'Loss',
          data: [10, 15, 20, 25, 30, 35, 40],
          borderColor: [this.colors.tertiary],
          backgroundColor: [this.colors.quaternary],
          stack: 'combined',
        }
      ]
    }
    let options: any = {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false
          },
          display: true,
          title: {
            display: true,
            text: 'Marks',
            padding: { top: 20, left: 0, right: 0, bottom: 0 }
          }
        },
        x: {
          grid: {
            display: false
          },
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
      type: 'line',
      data: data,
      options: options
    })
  }

}
