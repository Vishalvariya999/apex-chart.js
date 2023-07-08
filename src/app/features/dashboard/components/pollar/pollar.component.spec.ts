import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollarComponent } from './pollar.component';

describe('PollarComponent', () => {
  let component: PollarComponent;
  let fixture: ComponentFixture<PollarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
