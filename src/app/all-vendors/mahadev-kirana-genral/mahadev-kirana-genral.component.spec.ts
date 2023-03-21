import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahadevKiranaGenralComponent } from './mahadev-kirana-genral.component';

describe('MahadevKiranaGenralComponent', () => {
  let component: MahadevKiranaGenralComponent;
  let fixture: ComponentFixture<MahadevKiranaGenralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahadevKiranaGenralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MahadevKiranaGenralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
