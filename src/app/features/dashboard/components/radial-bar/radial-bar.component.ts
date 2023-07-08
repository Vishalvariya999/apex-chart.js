import { Component, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-radial-bar',
  templateUrl: './radial-bar.component.html',
  styleUrls: ['./radial-bar.component.scss']
})
export class RadialBarComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  // private primaryColor: string = '';
  private colors: any = {};

  constructor() {
    this.colors.primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();

    this.initChart();
  }

  private initChart() {
    this.chartOptions = {
      chart: {
        height: 390,
        type: "radialBar"
      },
      series: [78],
      // colors: ["#71c9ce"],
      colors: [this.colors.primary],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "60%"
          },
          dataLabels: {
            showOn: "always",
            value: {
              fontSize: "25px",
              show: true
            }
          }
        }
      },
      labels: ["Progress"]
    };
  }
}
