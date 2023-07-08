import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDonutsComponent } from './pie-donuts.component';

describe('PieDonutsComponent', () => {
  let component: PieDonutsComponent;
  let fixture: ComponentFixture<PieDonutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieDonutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieDonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
