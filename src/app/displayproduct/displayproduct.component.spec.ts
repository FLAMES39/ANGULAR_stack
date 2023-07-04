import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayproductComponent } from './displayproduct.component';

describe('DisplayproductComponent', () => {
  let component: DisplayproductComponent;
  let fixture: ComponentFixture<DisplayproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayproductComponent]
    });
    fixture = TestBed.createComponent(DisplayproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
