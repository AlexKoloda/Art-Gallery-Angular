import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './text-field.html',
  styleUrls: ['./text-field.scss'],
})
export class TextField {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() variant: 'outlined' | 'filled' | 'standard' = 'outlined';
  @Input() size: 'small' | 'normal' = 'normal';
  @Input() formControl?: FormControl;
  @Input() error = false;
  @Input() errorMessage = '';
  @Input() multiline = false;
  @Input() minRows = 1;
  @Input() maxRows?: number;
  @Input() fullWidth = false;
  @Input() disable = false;
  @Input() select = false;
  @Input() options: { value: string; label: string }[] = [];

  get control(): FormControl {
    if (!this.formControl) {
      this.formControl = new FormControl();
    }
    return this.formControl;
  }
}
