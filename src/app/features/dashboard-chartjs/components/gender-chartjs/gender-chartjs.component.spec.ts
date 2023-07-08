import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderChartjsComponent } from './gender-chartjs.component';

describe('GenderChartjsComponent', () => {
  let component: GenderChartjsComponent;
  let fixture: ComponentFixture<GenderChartjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderChartjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
