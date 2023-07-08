import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any;
  dataLabels: any;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-line-column',
  templateUrl: './line-column.component.html',
  styleUrls: ['./line-column.component.scss']
})
export class LineColumnComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  private data: any = [
    {
      name: "Revenue",
      type: "column",
      data: [20, 40, 60, 80, 100, 120, 140, 120, 100, 80, 60, 40],
    },
    {
      name: "Profite",
      type: "area",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    },
    {
      name: "Loss",
      type: "line",
      data: [5, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }
  ];
  private colors: any = {};

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
        height: 384,
        type: "line"
      },
      // colors: [(value: any, seriesIndex: any, w: any) => {
      //   // console.log('value :>> ', value);
      //   if (value.value < 140) {
      //     return '#a6e3e9'
      //   } else {
      //     return '#71c9ce'
      //   }
      // },
      // (value: any, seriesIndex: any, w: any) => {
      //   if (value.value < 110) {
      //     return '#cbf1f5'
      //   } else {
      //     return '#cbf1f5'
      //   }
      // },
      // (value: any, seriesIndex: any, w: any) => {
      //   if (value.value < 50) {
      //     return '#71c9ce'
      //   } else {
      //     return '#71c9ce'
      //   }
      // }],
      colors: [(value: any, seriesIndex: any, w: any) => {
        if (value.value < 140) {
          return this.colors.secondary
        } else {
          return this.colors.primary
        }
      },
      (value: any, seriesIndex: any, w: any) => {
        if (value.value < 110) {
          return this.colors.quaternary
        } else {
          return this.colors.quaternary
        }
      },
      (value: any, seriesIndex: any, w: any) => {
        if (value.value < 50) {
          return this.colors.tertiary
        } else {
          return this.colors.tertiary
        }
      }],
      // stroke: {
      //   // width: [0, 4, 5]
      //   dashArray: [0, 0, 8]
      // },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth"
      },
      tooltip: {
        x: {
          format: "dd MMMM yyyy"
        },
        y: {
          formatter: function (val: any) {
            return `${'&#8377;'}` + val;
          },
        },
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "Income"
          }
        },
        {
          opposite: true,
          title: {
            text: "Income"
          }
        }
      ],
    };
  }
}
