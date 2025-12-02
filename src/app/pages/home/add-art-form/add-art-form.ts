import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button';
import { TextField } from '../../../shared/text-field/text-field';

@Component({
  standalone: true,
  selector: 'app-add-art-form',
  imports: [ButtonComponent, TextField],
  templateUrl: './add-art-form.html',
  styleUrl: './add-art-form.scss',
})
export class AddArtForm {
  @Output() cancel = new EventEmitter<void>();

  onClickClose() {
    this.cancel.emit();
  }
}
