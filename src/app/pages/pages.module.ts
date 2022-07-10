import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})
export class PagesModule { }
