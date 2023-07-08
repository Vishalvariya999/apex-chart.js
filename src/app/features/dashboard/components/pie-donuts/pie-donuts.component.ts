import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-donuts',
  templateUrl: './pie-donuts.component.html',
  styleUrls: ['./pie-donuts.component.scss'],
})
export class PieDonutsComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  private colors: any = {};

  constructor() {
    this.colors.primary = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary')
      .trim();
    this.colors.secondary = getComputedStyle(document.documentElement)
      .getPropertyValue('--secondary')
      .trim();
    this.colors.tertiary = getComputedStyle(document.documentElement)
      .getPropertyValue('--tertiary')
      .trim();

    this.initChart();
  }

  private initChart() {
    this.chartOptions = {
      series: [33, 33, 33.5],
      chart: {
        width: 600,
        type: 'pie',
      },
      // colors: ['#71c9ce', '#a6e3e9', '#cbf1f5'],
      colors: [
        this.colors.primary,
        this.colors.secondary,
        this.colors.tertiary,
      ],
      labels: ['Team A', 'Team B', 'Team C'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
