import {Component} from '@angular/core';
import {Character} from "../interfaces/character.interface";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-components.html'
})

export class MainPageComponent {
  public character : Character[]=[
    {
      name :'Krillin',
      power: 100,
    },
    {
      name: 'Goku',
      power: 200
    }
  ];
  constructor() {
  }

  ngOnInit() {
  }
}
