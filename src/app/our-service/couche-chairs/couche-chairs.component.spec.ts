import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoucheChairsComponent } from './couche-chairs.component';

describe('CoucheChairsComponent', () => {
  let component: CoucheChairsComponent;
  let fixture: ComponentFixture<CoucheChairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoucheChairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoucheChairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
