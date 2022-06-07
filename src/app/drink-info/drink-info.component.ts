import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drink-info',
  templateUrl: './drink-info.component.html',
  styleUrls: ['./drink-info.component.css']
})
export class DrinkInfoComponent {
  @Input() strDrink!: string;
  @Input() strIngredient1!: string;
  @Input() strGlass!: string;
  @Input() strInstructions!: string;
  @Input() strDrinkThumb!: string;
  }

