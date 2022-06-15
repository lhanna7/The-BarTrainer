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
  edit: boolean = false;

  constructor(private route: ActivatedRoute, private drinkService: DrinkService) {}

  name = String(this.route.snapshot.paramMap.get("name"));

  ngOnInit () {
    this.drinkService.betterFetchByName(this.name).subscribe(response =>
    this.special = response);

  }

  toggleEditVisibility() {
    this.edit = !this.edit;
  }

  editSpecial() {
      console.log("hello there")
    this.toggleEditVisibility()
  }
}
