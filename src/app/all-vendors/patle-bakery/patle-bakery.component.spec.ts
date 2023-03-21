import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatleBakeryComponent } from './patle-bakery.component';

describe('PatleBakeryComponent', () => {
  let component: PatleBakeryComponent;
  let fixture: ComponentFixture<PatleBakeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatleBakeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatleBakeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
