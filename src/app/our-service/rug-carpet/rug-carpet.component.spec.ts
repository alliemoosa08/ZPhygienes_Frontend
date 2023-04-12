import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RugCarpetComponent } from './rug-carpet.component';

describe('RugCarpetComponent', () => {
  let component: RugCarpetComponent;
  let fixture: ComponentFixture<RugCarpetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RugCarpetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RugCarpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
