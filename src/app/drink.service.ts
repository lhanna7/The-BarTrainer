import { Injectable } from '@angular/core';
import { Drink, Special } from './models/Drink';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

type DrinkResponse = {
  drinks: Drink[];
}

export type SpecialResponse = {
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

fetchSpecialsByName(name: string): Observable<Special | undefined> {
  return this.fetchSpecials().pipe(
    map((response) => response.drinks
    .find((drink) => drink.name === name))
  )
}

// fetchRandom() {
//   return this.http.get<DrinkResponse>(`www.thecocktaildb.com/api/json/v2/9973533/random.php`)
// }
}

