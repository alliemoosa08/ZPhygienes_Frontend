import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInteriorComponent } from './car-interior.component';

describe('CarInteriorComponent', () => {
  let component: CarInteriorComponent;
  let fixture: ComponentFixture<CarInteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarInteriorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
