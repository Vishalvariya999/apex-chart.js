import { Component, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss'],
})
export class GenderChartComponent {

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  private colors: any = {};


  constructor() {
    this.colors.primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    this.colors.secondary = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();
    this.colors.tertiary = getComputedStyle(document.documentElement).getPropertyValue('--tertiary').trim();

    this.initChart();
  }

  private initChart() {
    this.chartOptions = {
      series: [60, 35, 5],
      chart: {
        width: 552,
        height: 650,
        type: 'donut',
      },
      // colors: [
      //   '#71c9ce',
      //   '#a6e3e9',
      //   '#cbf1f5',
      //   '#e3fdfd'
      // ],
      colors: [this.colors.primary, this.colors.secondary, this.colors.tertiary],
      dataLabels: {
        enabled: true,
      },
      labels: ['Male', 'Female', 'Other'],
      legend: {
        formatter: function (val: any, opts: any) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
        },
      },
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
