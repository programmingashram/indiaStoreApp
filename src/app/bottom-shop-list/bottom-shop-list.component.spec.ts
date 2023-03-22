import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomShopListComponent } from './bottom-shop-list.component';

describe('BottomShopListComponent', () => {
  let component: BottomShopListComponent;
  let fixture: ComponentFixture<BottomShopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomShopListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomShopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
