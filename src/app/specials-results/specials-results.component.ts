import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  name!: string;
  router: Router;

  constructor(
    private route: ActivatedRoute,
    private drinkService: DrinkService,
    router: Router) {
      this.router = router;
    }

  ngOnInit () {
    console.log(this.name)
    this.name = String(this.route.snapshot.paramMap.get("name"));
    this.drinkService.betterFetchByName(this.name).subscribe(response =>
    this.special = response);
  }

  toggleEditVisibility() {
    this.edit = !this.edit;
  }

  editSpecial(updatedSpecial: Special) {
    this.drinkService.editSpecial(updatedSpecial);
    this.toggleEditVisibility()
  }

  deleteSpecial() {
    this.drinkService.deleteSpecial(this.special!);
    this.router.navigate(['/view-specials']).then(() => {window.location.reload()})
  }
}
