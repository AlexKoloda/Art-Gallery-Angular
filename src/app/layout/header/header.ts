import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Search } from '../../shared/search/search';
import { SidebarToggleService } from '../../services/sidebar-toggle';
import { ViewportService } from '../../services/viewport';

@Component({
  selector: 'app-header',
  imports: [RouterModule, Search],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  sidebarState = inject(SidebarToggleService);
  viewport = inject(ViewportService);

  get isMobile(): boolean {
    return this.viewport.isMobile;
  }

  onMenuClick() {
    this.sidebarState.toggle();
  }
}
