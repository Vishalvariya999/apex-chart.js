import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatsComponent } from './components/stats/stats.component';
import { RevenueChartComponent } from './components/revenue-chart/revenue-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GenderChartComponent } from './components/gender-chart/gender-chart.component';
import { LineColumnComponent } from './components/line-column/line-column.component';
import { LineAreaComponent } from './components/line-area/line-area.component';
import { PieDonutsComponent } from './components/pie-donuts/pie-donuts.component';
import { ScatterComponent } from './components/scatter/scatter.component';
import { CircleComponent } from './components/circle/circle.component';
import { RadialBarComponent } from './components/radial-bar/radial-bar.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { PollarComponent } from './components/pollar/pollar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StatsComponent,
    RevenueChartComponent,
    GenderChartComponent,
    LineColumnComponent,
    LineAreaComponent,
    PieDonutsComponent,
    ScatterComponent,
    CircleComponent,
    RadialBarComponent,
    TimeLineComponent,
    RadarChartComponent,
    PollarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule
  ],
})
export class DashboardModule { }
