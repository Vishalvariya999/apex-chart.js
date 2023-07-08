import { Component, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexStroke,
  ApexFill,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
};

@Component({
  selector: 'app-pollar',
  templateUrl: './pollar.component.html',
  styleUrls: ['./pollar.component.scss'],
})
export class PollarComponent {
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
    this.colors.quaternary = getComputedStyle(document.documentElement)
      .getPropertyValue('--quaternary')
      .trim();
    this.initChart();
  }

  private initChart() {
    this.chartOptions = {
      series: [22, 20, 15, 10],
      chart: {
        height: 360,
        type: 'polarArea',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D'],
      colors: [
        this.colors.primary,
        this.colors.secondary,
        this.colors.tertiary,
        this.colors.quaternary,
      ],
      stroke: {
        width: 0,
        colors: undefined,
      },
      fill: {
        opacity: 0.8,
      },
      theme: {
        monochrome: {
          //enabled: true,
          shadeTo: 'light',
          shadeIntensity: 0.6,
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
