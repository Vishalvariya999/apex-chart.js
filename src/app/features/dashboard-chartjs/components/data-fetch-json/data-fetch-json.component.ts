import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-data-fetch-json',
  templateUrl: './data-fetch-json.component.html',
  styleUrls: ['./data-fetch-json.component.scss']
})
export class DataFetchJsonComponent {
  @ViewChild('myChart') myChart!: ElementRef;
  public canvas!: any;
  public ctx!: any;
  private colors: any = {};
  private chartData: any;
  private lbl: string[] = [];
  private revenueData: number[] = [];
  private expensesData: number[] = [];
  private profitData: number[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
    this.colors.primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    this.colors.secondary = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();
    this.colors.tertiary = getComputedStyle(document.documentElement).getPropertyValue('--tertiary').trim();
    this.colors.quaternary = getComputedStyle(document.documentElement).getPropertyValue('--quaternary').trim();

    this.httpClient.get('assets/ChartData/data.json').subscribe((res: any) => {
      if (res) {
        this.chartData = res?.financialreport[0]?.finance;
        this.chartData.map((res: any) => {
          this.lbl.push(res?.date);
          this.revenueData.push(res?.revenue);
          this.expensesData.push(res?.expenses);
          this.profitData.push(res?.profit)
        })
        this.initChart();
      }
    });
  }

  private initChart() {
    this.canvas = this.myChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    let data = {
      labels: this.lbl,
      datasets: [
        {
          label: 'Revenue',
          data: this.revenueData,
          backgroundColor: [this.colors.primary],
          borderWidth: 2,
          barPercentage: 0.5,
          barThickness: 50,
          borderRadius: 15
        },
        {
          label: 'Expenses',
          data: this.expensesData,
          backgroundColor: [this.colors.secondary],
          borderWidth: 2,
          barPercentage: 0.5,
          barThickness: 50,
          borderRadius: 15
        },
        {
          label: 'Profit',
          data: this.profitData,
          backgroundColor: [this.colors.tertiary],
          borderWidth: 2,
          barPercentage: 0.5,
          barThickness: 50,
          borderRadius: 15
        }
      ]
    }
    let options: any = {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month',
            padding: { top: 20, left: 0, right: 0, bottom: 0 }
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Income',
            padding: { top: 30, left: 0, right: 0, bottom: 0 }
          }
        }
      }
    }
    new Chart(this.ctx, {
      type: 'bar',
      data: data,
      options: options
    })
  }
}
