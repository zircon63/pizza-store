import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { UiModule } from '@ui/ui.module';
import { PagesRoutingModule } from '@pages/pages-routing.module';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const PAGES_COMPONENTS = [
  PagesComponent,
];

const PAGES_MODULES = [];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    UiModule,
    ...PAGES_MODULES,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [...PAGES_COMPONENTS],
  providers: [],
})
export class PagesModule {
}
