import { Injectable } from '@angular/core';
import { Drink } from './models/Drink';
import { HttpClient } from '@angular/common/http';

type DrinkResponse = {
  drinks: Drink[];
}

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
constructor(private http: HttpClient) {}

fetchDrinks() {
  return this.http.get<DrinkResponse>(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=margarita`)
}

}
