import { Component } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Special } from '../models/Drink';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent {

  specials: Special[] = []

  constructor(private drinkService: DrinkService) {}

  addSpecial(newSpecial: Special) {
    return this.drinkService.addSpecial(newSpecial).subscribe(response => {
      this.specials = [response.drink, ...this.specials]
    })
  }

}
