import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueChartjsComponent } from './revenue-chartjs.component';

describe('RevenueChartjsComponent', () => {
  let component: RevenueChartjsComponent;
  let fixture: ComponentFixture<RevenueChartjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueChartjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
