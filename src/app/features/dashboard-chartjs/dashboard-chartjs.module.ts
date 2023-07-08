import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardChartjsRoutingModule } from './dashboard-chartjs-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatsChartjsComponent } from './components/stats-chartjs/stats-chartjs.component';
import { RevenueChartjsComponent } from './components/revenue-chartjs/revenue-chartjs.component';
import { GenderChartjsComponent } from './components/gender-chartjs/gender-chartjs.component';
import { MultiColumnComponent } from './components/multi-column/multi-column.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarHorizontalComponent } from './components/bar-horizontal/bar-horizontal.component';
import { BarLineChartComponent } from './components/bar-line-chart/bar-line-chart.component';
import { PollarChartComponent } from './components/pollar-chart/pollar-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { DataFetchJsonComponent } from './components/data-fetch-json/data-fetch-json.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent,
    StatsChartjsComponent,
    RevenueChartjsComponent,
    GenderChartjsComponent,
    MultiColumnComponent,
    AreaChartComponent,
    PieChartComponent,
    BarHorizontalComponent,
    BarLineChartComponent,
    PollarChartComponent,
    RadarChartComponent,
    DataFetchJsonComponent
  ],
  imports: [
    CommonModule,
    DashboardChartjsRoutingModule,
    HttpClientModule
  ]
})
export class DashboardChartjsModule { }
