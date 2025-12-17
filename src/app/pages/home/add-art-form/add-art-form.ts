import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button';
import { TextField } from '../../../shared/text-field/text-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ICategory } from '../../../models/category.model';
import { ArtService } from '../../../services/art.service';

export type TAddArtDto = {
  name: string;
  categoryId: number;
  description: string;
  author?: string;
  pictureUrl?: string;
  miniPictureUrl?: string;
  location?: number;
  price?: number;
};

@Component({
  standalone: true,
  selector: 'app-add-art-form',
  imports: [ButtonComponent, TextField],
  templateUrl: './add-art-form.html',
  styleUrl: './add-art-form.scss',
})
export class AddArtForm {
  @Output() cancel = new EventEmitter<void>();
  @Input() categoriesArray!: ICategory[] | [];

  constructor(private artService: ArtService) {}

  name = new FormControl<string>('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern(/^(?![0-9]{4}).+/),
    ],
  });

  description = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(2), Validators.maxLength(150)],
  });

  author = new FormControl<string | null>(null, {
    validators: [Validators.minLength(2), Validators.maxLength(150)],
  });

  pictureUrl = new FormControl<string | null>(null, {
    validators: [Validators.minLength(2), Validators.maxLength(150)],
  });

  categoryId = new FormControl<string | null>(null, {
    validators: [Validators.required],
  });

  miniPictureUrl = new FormControl<string | null>(null, {
    validators: [Validators.minLength(2), Validators.maxLength(150)],
  });

  location = new FormControl<number | null>(null);
  price = new FormControl<number | null>(null);

  form = new FormGroup({
    name: this.name,
    description: this.description,
    author: this.author,
    pictureUrl: this.pictureUrl,
    categoryId: this.categoryId,
    miniPictureUrl: this.miniPictureUrl,
    location: this.location,
    price: this.price,
  });

  get categoryOptions() {
    return this.categoriesArray.map((category) => ({
      value: category.id,
      label: category.name,
    }));
  }

  get placeholderUrl() {
    return `https://placehold.co/600?text=${this.name.value}&font=roboto`;
  }

  getErrorMessage(control: FormControl) {
    if (!control.errors) {
      return '';
    }

    const errors = control.errors;

    if (errors['required']) {
      return 'This field is required';
    }

    if (errors['minlength']) {
      return `Minimum length is ${errors['minlength'].requiredLength} characters`;
    }

    if (errors['maxlength']) {
      return `Maximum length is ${errors['maxlength'].requiredLength} characters`;
    }

    if (errors['pattern']) {
      return 'Pattern is not valid';
    }

    return 'Invalid field';
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formData: TAddArtDto = {
      name: this.name.value,
      categoryId: Number(this.categoryId.value),
      description: this.description.value,
      author: this.author.value ?? undefined,
      //TODO: Feat change placeholder to URL from server
      pictureUrl: this.placeholderUrl,
      miniPictureUrl: this.miniPictureUrl.value ?? undefined,
      location: this.location.value ?? undefined,
      price: this.price.value ?? undefined,
    };

    this.artService.postNewArt(formData).subscribe({
      next: () => {
        this.form.reset();
        this.cancel.emit();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  onClickClose() {
    this.cancel.emit();
  }
}
