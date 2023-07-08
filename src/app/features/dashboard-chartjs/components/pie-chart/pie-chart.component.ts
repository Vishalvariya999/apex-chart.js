import { AfterContentInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements AfterViewInit {

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
      labels: ['Vishal', 'Parag', 'Arvind', 'Dharmik'],
      datasets: [
        {
          fill: true,
          label: 'Maths',
          data: [65, 59, 80, 81],
          backgroundColor: [this.colors.primary, this.colors.secondary, this.colors.tertiary, this.colors.quaternary],
        }
      ]
    }
    let options: any = {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false,
          }
        }
      },
      legend: {
        display: true
      },
    }
    new Chart(this.ctx, {
      type: 'pie',
      data: data,
      options: options
    })
  }
}
