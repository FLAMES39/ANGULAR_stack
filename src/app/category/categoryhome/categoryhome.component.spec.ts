import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryhomeComponent } from './categoryhome.component';

describe('CategoryhomeComponent', () => {
  let component: CategoryhomeComponent;
  let fixture: ComponentFixture<CategoryhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryhomeComponent]
    });
    fixture = TestBed.createComponent(CategoryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
