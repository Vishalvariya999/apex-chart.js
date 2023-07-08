import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFetchJsonComponent } from './data-fetch-json.component';

describe('DataFetchJsonComponent', () => {
  let component: DataFetchJsonComponent;
  let fixture: ComponentFixture<DataFetchJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFetchJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFetchJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
