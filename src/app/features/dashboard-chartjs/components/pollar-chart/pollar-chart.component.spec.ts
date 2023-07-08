import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollarChartComponent } from './pollar-chart.component';

describe('PollarChartComponent', () => {
  let component: PollarChartComponent;
  let fixture: ComponentFixture<PollarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
