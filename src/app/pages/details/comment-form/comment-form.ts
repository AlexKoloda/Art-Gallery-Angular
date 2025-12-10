import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentService } from '../../../services/comment';
import { TextField } from '../../../shared/text-field/text-field';
import { IComment } from '../../../models/comment.model';

type CommentFormGroup = {
  authorName: FormControl<string>;
  commentText: FormControl<string>;
};

@Component({
  selector: 'app-comment-form',
  imports: [ButtonComponent, TextField, ReactiveFormsModule],
  templateUrl: './comment-form.html',
  styleUrl: './comment-form.scss',
})
export class CommentForm {
  @Input() artId!: number;
  @Output() created = new EventEmitter<IComment>();

  constructor(private commentService: CommentService) {}

  commentForm = new FormGroup<CommentFormGroup>({
    authorName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(150)],
    }),
    commentText: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(150)],
    }),
  });

  get commentAuthor() {
    return this.commentForm.controls.authorName;
  }

  get commentValue() {
    return this.commentForm.controls.commentText;
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
    if (this.commentForm.invalid) {
      this.commentForm.markAllAsTouched();
      return;
    }

    const formData = {
      itemId: this.artId,
      commentAuthor: this.commentAuthor.value,
      commentValue: this.commentValue.value,
    };

    this.commentService.postNewComment(formData).subscribe({
      next: (comment) => {
        this.commentForm.reset();
        this.created.emit(comment);
      },
      error: (error) => console.error('Error', error),
    });
  }
}
