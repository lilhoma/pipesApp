import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { UncommonsPageComponent } from './pages/uncommons-page/uncommons-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';


@NgModule({
  declarations: [
    BasicsPageComponent,
    UncommonsPageComponent,
    NumbersPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
