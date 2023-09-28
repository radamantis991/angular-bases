import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Spider-man';
  public age: number = 25

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'ironman';
  }

  changeAge(): void{
    this.age = 45;
  }

  resetHero(): void {
    this.name = 'Spider-man';
    this.age = 25;
  }
}
