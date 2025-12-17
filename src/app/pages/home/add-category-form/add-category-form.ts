import { Component, EventEmitter, Output } from '@angular/core';
import { TextField } from '../../../shared/text-field/text-field';
import { ButtonComponent } from '../../../shared/button/button';
import { FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { ICategory } from '../../../models/category.model';
import { ErrorService } from '../../../services/error.service';
import { ToastService } from '../../../shared/toast/toast.service';

export type TAddCategoryDto = {
  name: string;
  description: string;
};

@Component({
  selector: 'app-add-category-form',
  imports: [TextField, ButtonComponent],
  templateUrl: './add-category-form.html',
  styleUrl: './add-category-form.scss',
})
export class AddCategoryForm {
  @Output() cancel = new EventEmitter<void>();
  @Output() created = new EventEmitter<ICategory>();

  constructor(
    private categoryService: CategoryService,
    private errService: ErrorService,
    private toastService: ToastService
  ) {}

  categoryName = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(2)],
  });

  categoryDescription = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(2)],
  });

  onSubmit() {
    if (this.categoryName.invalid || this.categoryDescription.invalid) {
      this.categoryName.markAsTouched();
      this.categoryDescription.markAsTouched();
      return;
    }

    const formData: TAddCategoryDto = {
      name: this.categoryName.value.trim(),
      description: this.categoryDescription.value.trim(),
    };

    this.categoryService.postNewCategory(formData).subscribe({
      next: (category) => {
        this.created.emit(category);
        this.toastService.success(`${category.name} successful created`);
        this.cancel.emit();
      },
      error: (err) => {
        this.toastService.error(`${this.errService.parseError(err.status)}`);
      },
    });
  }

  onClickClose() {
    this.cancel.emit();
  }
}
