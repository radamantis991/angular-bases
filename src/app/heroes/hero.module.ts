import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    HeroListComponent
  ],
  declarations: [
    HeroComponent,
    HeroListComponent
  ],
  providers: [],
})
export class HeroModule { }
