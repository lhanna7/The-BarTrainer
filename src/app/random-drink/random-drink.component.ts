import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from '../drink.service';
import { Drink } from '../models/Drink';

@Component({
  selector: 'app-random-drink',
  templateUrl: './random-drink.component.html',
  styleUrls: ['./random-drink.component.css']
})
export class RandomDrinkComponent implements OnInit{
  results: Drink[] = []

  constructor(private route: ActivatedRoute, private drinkService: DrinkService) {}

  ngOnInit() {
      this.drinkService.fetchRandom().subscribe(response =>
        console.log(this.results = response.drinks))
  }
}
