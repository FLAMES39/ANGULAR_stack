import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecategoryComponent } from './singlecategory.component';

describe('SinglecategoryComponent', () => {
  let component: SinglecategoryComponent;
  let fixture: ComponentFixture<SinglecategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglecategoryComponent]
    });
    fixture = TestBed.createComponent(SinglecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
