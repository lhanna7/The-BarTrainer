import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drink-info',
  templateUrl: './drink-info.component.html',
  styleUrls: ['./drink-info.component.css']
})
export class DrinkInfoComponent {
  @Input() strDrink!: string;
  @Input() strIngredient1!: string;
  @Input() strIngredient2!: string;
  @Input() strIngredient3!: string;
  @Input() strIngredient4!: string;
  @Input() strIngredient5!: string;
  @Input() strIngredient6!: string;
  @Input() strIngredient7!: string;
  @Input() strIngredient8!: string;
  @Input() strIngredient9!: string;
  @Input() strIngredient10!: string;
  @Input() strIngredient11!: string;
  @Input() strIngredient12!: string;
  @Input() strIngredient13!: string;
  @Input() strIngredient14!: string;
  @Input() strIngredient15!: string;
  @Input() strMeasure1!: string;
  @Input() strMeasure2!: string;
  @Input() strMeasure3!: string;
  @Input() strMeasure4!: string;
  @Input() strMeasure5!: string;
  @Input() strMeasure6!: string;
  @Input() strMeasure7!: string;
  @Input() strMeasure8!: string;
  @Input() strMeasure9!: string;
  @Input() strMeasure10!: string;
  @Input() strMeasure11!: string;
  @Input() strMeasure12!: string;
  @Input() strMeasure13!: string;
  @Input() strMeasure14!: string;
  @Input() strMeasure15!: string;
  @Input() strGlass!: string;
  @Input() strInstructions!: string;
  @Input() strDrinkThumb!: string;
  }

