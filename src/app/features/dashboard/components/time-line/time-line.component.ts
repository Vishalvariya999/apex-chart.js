import { Component, ViewChild } from
  '@angular/core';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  private colors: any = {};

  public data: any = [
    {
      data: [
        {
          x: "Analysis",
          y: [
            new Date("2019-02-27").getTime(),
            new Date("2019-03-04").getTime()
          ],
          fillColor: "#008FFB"
        },
        {
          x: "Design",
          y: [
            new Date("2019-03-04").getTime(),
            new Date("2019-03-08").getTime()
          ],
          fillColor: "#00E396"
        },
        {
          x: "Coding",
          y: [
            new Date("2019-03-07").getTime(),
            new Date("2019-03-10").getTime()
          ],
          fillColor: "#775DD0"
        },
        {
          x: "Testing",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-12").getTime()
          ],
          fillColor: "#FEB019"
        },
        {
          x: "Deployment",
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-17").getTime()
          ],
          fillColor: "#FF4560"
        }
      ]
    }
  ]

  constructor() {
    this.colors.primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    this.colors.secondary = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();

    this.initChart();
  }

  private initChart() {
    this.chartOptions = {
      series: [
        {
          name: "India",
          data: [60, 150, 200, 280, 350, 380],
        },
        {
          name: "Pakistan",
          data: [50, 100, 140, 200, 250, 280],
        }
      ],
      colors: [this.colors.primary, this.colors.secondary],
      chart: {
        height: 370,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Overs',
        },
        labels: {
          formatter: (value: any) => {
            return value + `0`;
          }
        },
      },
      yaxis: {
        title: {
          text: 'Runs',
        }
      },
      stroke: {
        curve: "smooth"
      },
    };
    console.log(' this.chartOptions :>> ', this.chartOptions);
  }
}
