import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-horizontal',
  templateUrl: './bar-horizontal.component.html',
  styleUrls: ['./bar-horizontal.component.scss']
})
export class BarHorizontalComponent implements AfterViewInit {

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
      labels: ['Vishal', 'Parag', 'Arvind', 'Dharmik'],
      datasets: [
        {
          axis: 'y',
          fill: false,
          label: 'Maths',
          data: [65, 59, 80, 81],
          backgroundColor: [this.colors.primary, this.colors.secondary, this.colors.tertiary, this.colors.quaternary],
          borderWidth: 1,
          barThickness: 50,
          borderRadius: 15
        }
      ]
    }
    let options: any = {
      tooltips: {
        displayColors: true,
        callbacks: {
          mode: 'x',
        },
      },
      scales: {
        x: {
          stacked: true,
          display: true,
          title: {
            display: true,
            text: 'Marks',
            padding: { top: 20, left: 0, right: 0, bottom: 0 }
          }
        },
        y: {
          stacked: true,
          display: true,
          title: {
            display: true,
            text: 'Name',
            padding: { top: 20, left: 0, right: 0, bottom: 0 }
          }
        }
      },
      indexAxis: 'y',
      responsive: true
    }
    new Chart(this.ctx, {
      type: 'bar',
      data: data,
      options: options
    })
  }

}
