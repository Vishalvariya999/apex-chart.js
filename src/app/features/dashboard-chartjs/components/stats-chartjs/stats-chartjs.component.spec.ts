import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsChartjsComponent } from './stats-chartjs.component';

describe('StatsChartjsComponent', () => {
  let component: StatsChartjsComponent;
  let fixture: ComponentFixture<StatsChartjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsChartjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
