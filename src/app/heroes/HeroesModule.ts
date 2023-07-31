import {NgModule} from "@angular/core";
import {CommonModule, NgForOf, NgIf} from "@angular/common";

import {ListComponent} from "./list/list.component";
import {HeroComponent} from "./hero/hero.component";


@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports: [HeroComponent, ListComponent],
  imports: [
    CommonModule,
    NgForOf,
    NgIf
  ]
})
export class HeroesModule{}

