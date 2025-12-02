import { Component, EventEmitter, Output } from '@angular/core';
import { TextField } from '../../../shared/text-field/text-field';
import { ButtonComponent } from '../../../shared/button/button';

@Component({
  selector: 'app-add-category-form',
  imports: [TextField, ButtonComponent],
  templateUrl: './add-category-form.html',
  styleUrl: './add-category-form.scss',
})
export class AddCategoryForm {
  @Output() cancel = new EventEmitter<void>();

  onClickClose() {
    this.cancel.emit();
  }
}
