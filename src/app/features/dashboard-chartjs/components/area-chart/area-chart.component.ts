import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements AfterViewInit {

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
      labels: ['Vishal', 'Parag', 'Arvind', 'Dharmik', 'Jaydeep', 'Pratik', 'Ramesh'],
      datasets: [
        {
          fill: true,
          label: 'Maths',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: [this.colors.primary],
          backgroundColor: [this.colors.secondary],
          borderWidth: 5
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
            padding: { top: 20, left: 0, right: 0, bottom: 0 }
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
      type: 'line',
      data: data,
      options: options
    })
  }
}

