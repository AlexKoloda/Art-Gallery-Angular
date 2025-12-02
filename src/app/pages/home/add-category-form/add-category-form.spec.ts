import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryForm } from './add-category-form';

describe('AddCategoryModal', () => {
  let component: AddCategoryForm;
  let fixture: ComponentFixture<AddCategoryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCategoryForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCategoryForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
