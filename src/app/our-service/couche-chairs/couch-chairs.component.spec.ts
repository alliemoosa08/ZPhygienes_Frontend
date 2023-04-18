import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchChairsComponent } from './couch-chairs.component';

describe('CouchChairsComponent', () => {
  let component: CouchChairsComponent;
  let fixture: ComponentFixture<CouchChairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouchChairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouchChairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
