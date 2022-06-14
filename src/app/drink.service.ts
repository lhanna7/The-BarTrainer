import { Injectable } from '@angular/core';
import { Drink, Special } from './models/Drink';
import { HttpClient } from '@angular/common/http';

type DrinkResponse = {
  drinks: Drink[];
}

type SpecialResponse = {
  drinks: Special[]
}

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
constructor(private http: HttpClient) {}

search(searchTerm: string) {
  return this.http.get<DrinkResponse>(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${searchTerm}`)
}

fetchSpecials() {
  return this.http.get<SpecialResponse>(`https://bartrainer-cocktails.herokuapp.com/api/drinks`)
}

// fetchRandom() {
//   return this.http.get<DrinkResponse>(`www.thecocktaildb.com/api/json/v2/9973533/random.php`)
// }
}

