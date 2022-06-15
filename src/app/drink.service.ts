import { Injectable } from '@angular/core';
import { Drink, Special } from './models/Drink';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

type DrinkResponse = {
  drinks: Drink[];
}

export type SpecialResponse = {
  drinks: Special[]
}

export type SingleSpecialResponse = {
  drink: Special
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

// fetchSpecialsByName(name: string): Observable<Special | undefined> {
//   return this.fetchSpecials().pipe(
//     map((response) => response.drinks
//     .find((drink) => drink.name === name))
//   )
// }

betterFetchByName(name: string) {
  return this.fetchSpecials().pipe(
    map((response) =>
    response.drinks.find((drink) => drink.name === name)
    )
  )
}

fetchRandom() {
  return this.http.get<DrinkResponse>(`https://www.thecocktaildb.com/api/json/v2/9973533/random.php`)
}

addSpecial(newSpecial: Special) {
  return this.http.post<SingleSpecialResponse>(`https://bartrainer-cocktails.herokuapp.com/api/drinks`, newSpecial, httpOptions)
}

editSpecial(updatedSpecial: Special) {
  return this.http.put<SingleSpecialResponse>(`https://bartrainer-cocktails.herokuapp.com/api/drinks`, updatedSpecial, httpOptions)
}
}

