import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  private colors: any = {};
  private data: any = [
    {
      name: "Team A",
      data: [80, 50, 30, 40, 100, 20]
    },
    {
      name: "Team B",
      data: [20, 30, 40, 80, 20, 80]
    },
    {
      name: "Team C",
      data: [44, 76, 78, 13, 43, 10]
    }
  ];

  constructor() {
    this.colors.primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    this.colors.secondary = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();
    this.colors.tertiary = getComputedStyle(document.documentElement).getPropertyValue('--tertiary').trim();
    this.colors.quaternary = getComputedStyle(document.documentElement).getPropertyValue('--quaternary').trim();

    this.initChart();
  }

  private initChart() {
    this.chartOptions = {
      series: this.data,
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: false,
          blur: 0,
          left: 0,
          top: 0
        }
      },
      colors: [this.colors.primary, this.colors.secondary, this.colors.quaternary],
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
      }
    };
  }
}
