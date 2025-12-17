import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appToastHost]',
  standalone: true,
})
export class ToastHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
