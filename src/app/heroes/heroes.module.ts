import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    CommonModule, //Aquí ha importado CommonModule de @angular/common porque al encapsular nuestro módulo ngIf y ngFor necesitaban esta directiva para poder funcionar.
  ]
})

export class HeroesModule {}

