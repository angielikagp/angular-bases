import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name :string= 'ironman';
  public age : number= 10 ;

  get capitalizedName() : string {//metodoGetter del atributo

    return this.name.toUpperCase();
  }
  getHeroDescription(){ //Esto es un método
    return `${ this.name } - ${ this.age}`;
  }

  changeName() : void {
    this.name='Spiderman';
  }
   changeAge(): void {
    this.age=100;

   }

   resetForm(): void {
    this.name='ironman';
    this.age=10;
   }
}
