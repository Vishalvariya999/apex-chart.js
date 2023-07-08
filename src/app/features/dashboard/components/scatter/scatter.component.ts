import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  private colors: any = {};
  public data: any = [
    {
      name: "ABC",
      data: [44, 95, 43, 85, 45, 80, 40]
    },
  ]

  constructor() {
    this.colors.primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    this.colors.secondary = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();

    this.initChart();
  }

  private initChart() {
    this.chartOptions = {
      series: this.data,
      chart: {
        type: "bar",
        height: 455
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          },
          columnWidth: '50%',
          borderRadius: 10,

        }
      },
      // colors: [
      //   (value: any, seriesIndex: any, w: any) => {
      //     if (value.value <= 45) {
      //       return '#a6e3e9'
      //     } else {
      //       return '#71c9ce'
      //     }
      //   },
      // ],
      colors: [
        (value: any, seriesIndex: any, w: any) => {
          if (value.value <= 45) {
            return this.colors.secondary;
          } else {
            return this.colors.primary;
          }
        },
      ],
      dataLabels: {
        enabled: true,
        offsetX: -5,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 2
      },

      xaxis: {
        categories: ['Maths', 'English', 'Gujarati', 'S.S', 'Science', 'P.T', 'Hindi'],
        title: {
          text: 'Marks',
        },
        labels: {
          formatter: (value: any) => {
            return value + `0`;
          }
        },
      },
      yaxis: {
        title: {
          text: 'Subjects',
        },
        labels: {
          formatter: (value: any) => {
            return value + `0`;
          }
        },
      },
    };
  }
}
