import { Component, Input, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Special } from '../models/Drink';

@Component({
  selector: 'app-specials-cocktails',
  templateUrl: './specials-cocktails.component.html',
  styleUrls: ['./specials-cocktails.component.css']
})
export class SpecialsCocktailsComponent implements OnInit{
  results: Special[] = []

  constructor(private drinkService: DrinkService) {}

  @Input() name!: string;


ngOnInit() {
  return this.drinkService.fetchSpecials().subscribe(response => {
    this.results = response.drinks
  })
}

}
