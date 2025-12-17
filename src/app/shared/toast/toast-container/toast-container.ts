import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ToastHostDirective } from '../toast-host.directive';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast-container',
  imports: [ToastHostDirective],
  templateUrl: './toast-container.html',
  styleUrl: './toast-container.scss',
})
export class ToastContainer implements AfterViewInit {
  @ViewChild(ToastHostDirective, { static: true })
  toastHost!: ToastHostDirective;

  constructor(private toastService: ToastService) {}

  ngAfterViewInit(): void {
    this.toastService.registerHost(this.toastHost.viewContainerRef);
  }
}
