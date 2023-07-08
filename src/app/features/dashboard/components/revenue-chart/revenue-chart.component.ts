import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexChart,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexMarkers,
  ApexAnnotations,
  ApexStroke
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  annotations: ApexAnnotations;
  colors: any;
  toolbar: any;
};

@Component({
  selector: 'app-revenue-chart',
  templateUrl: './revenue-chart.component.html',
  styleUrls: ['./revenue-chart.component.scss'],
})

export class RevenueChartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  public activeOptionButton = "all";
  private colors: any = {};

  public data = [
    {
      name: 'Net Profit',
      // data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      data: [
        {
          y: 44,
          x: new Date('01 Jan 2012').getTime()
        },
        {
          y: 55,
          x: new Date('01 Feb 2012').getTime()
        },
        {
          y: 57,
          x: new Date('01 Mar 2012').getTime()
        },
        {
          y: 56,
          x: new Date('01 Apr 2012').getTime()
        },
        {
          y: 61,
          x: new Date('01 May 2012').getTime()
        }
        ,
        {
          y: 60,
          x: new Date('01 Jun 2012').getTime()
        },
        {
          y: 63,
          x: new Date('01 Jul 2012').getTime()
        },
        {
          y: 60,
          x: new Date('01 Aug 2012').getTime()
        },
        {
          y: 66,
          x: new Date('01 Sep 2012').getTime()
        },

      ]
    },
    {
      name: 'Revenue',
      // data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      data: [
        {
          y: 76,
          x: new Date('01 Jan 2012').getTime()
        },
        {
          y: 85,
          x: new Date('01 Feb 2012').getTime()
        },
        {
          y: 101,
          x: new Date('01 Mar 2012').getTime()
        },
        {
          y: 98,
          x: new Date('01 Apr 2012').getTime()

        },
        {
          y: 87,
          x: new Date('01 May 2012').getTime()
        }
        ,
        {
          y: 105,
          x: new Date('01 Jun 2012').getTime()
        },
        {
          y: 91,
          x: new Date('01 Jul 2012').getTime()
        },
        {
          y: 114,
          x: new Date('01 Aug 2012').getTime()
        },
        {
          y: 94,
          x: new Date('01 Sep 2012').getTime()
        },

      ]
    },
    {
      name: 'Free Cash Flow',
      // data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      data: [
        {
          y: 35,
          x: new Date('01 Jan 2012').getTime()
        },
        {
          y: 41,
          x: new Date('01 Feb 2012').getTime()
        },
        {
          y: 36,
          x: new Date('01 Mar 2012').getTime()
        },
        {
          y: 26,
          x: new Date('01 Apr 2012').getTime()
        },
        {
          y: 45,
          x: new Date('01 May 2012').getTime()
        },
        {
          y: 48,
          x: new Date('01 Jun 2012').getTime()
        },
        {
          y: 52,
          x: new Date('01 Jul 2012').getTime()
        },
        {
          y: 53,
          x: new Date('01 Aug 2012').getTime()
        },
        {
          y: 41,
          x: new Date('01 Sep 2012').getTime()
        },

      ]
    }
  ]

  public updateOptionsData: any = {
    "1m": {
      xaxis: {
        min: new Date("01 Jan 2012").getTime(),
        max: new Date("01 Feb 2012").getTime()
      }
    },
    "6m": {
      xaxis: {
        min: new Date("01 Jan 2012").getTime(),
        max: new Date("01 July 2012").getTime()
      }
    },
    "1y": {
      xaxis: {
        min: new Date("01 Jan 2012").getTime(),
        max: new Date(" Jan 2013").getTime()
      }
    },
    all: {
      xaxis: {
        min: undefined,
        max: undefined
      }
    }
  };

  constructor() {
    this.colors.primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    this.colors.secondary = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();
    this.colors.tertiary = getComputedStyle(document.documentElement).getPropertyValue('--tertiary').trim();
    this.initChart();
  }

  ngOnInit(): void {
    // this.data.forEach((res: any) => {
    //   console.log('res :>> ', res);
    //   let data = [];
    //   res.data.forEach((val: any) => {
    //     console.log('val :>> ', val);
    //     data.push({
    //       x: val.y,
    //       y: val.x
    //     })
    //   })
    // });
  }

  public initChart() {
    this.chartOptions = {
      series: this.data,
      chart: {
        type: 'bar',
        height: 380,
      },
      // colors: [
      //   '#71c9ce',
      //   '#a6e3e9',
      //   '#cbf1f5'
      // ],
      // colors: ['#0081C9', '#5BC0F8', '#86E5FF'],
      colors: [this.colors.primary, this.colors.secondary, this.colors.tertiary],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          // borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'datetime',
        min: new Date('01 Jan 2012').getTime()
      },
      yaxis: {
        title: {
          text: 'Rs. (thousands)',
        },
      },
      tooltip: {
        x: {
          show: true,
          format: '',
          formatter: undefined,
        },
        y: {
          formatter: (val: any) => {
            return `${'&#8377;'}` + val + ' Thousands';
          },
        },
        style: {
          fontSize: '15px'
        },
        fillSeriesColor: true,
      },
      responsive: [
        {
          breakpoint: undefined,
          options: {
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '50%'
              }
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    console.log('this.chartOptions :>> ', this.chartOptions);
  }


  public updateOptions(option: any): void {
    console.log('option :>> ', option);
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }
}
