import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllshopComponent } from './allshop.component';

describe('AllshopComponent', () => {
  let component: AllshopComponent;
  let fixture: ComponentFixture<AllshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
