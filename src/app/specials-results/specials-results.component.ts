import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from '../drink.service';
import { Special } from '../models/Drink';

@Component({
  selector: 'app-specials-results',
  templateUrl: './specials-results.component.html',
  styleUrls: ['./specials-results.component.css']
})
export class SpecialsResultsComponent implements OnInit {
  special?: Special

  constructor(private route: ActivatedRoute, private drinkService: DrinkService) {}

  name = String(this.route.snapshot.paramMap.get("name"));

  ngOnInit () {
    this.drinkService.fetchSpecialsByName(this.name).subscribe(response =>
    this.special = response)
  }
}
