import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 24;

  get capitalizedName():string{
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  chagenHero():void {
    this.name = 'Hulk';
  }

  chagenAge():void {
    this.age = Math.random();
  }
}
