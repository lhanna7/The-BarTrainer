import { Injectable } from '@angular/core';
import { Drink, Special } from './models/Drink';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const cocktailDbEndpoint = `${environment.thirdPartyApiUrl}`;
const specialsEndpoint = `${environment.baseApiUrl}`

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
  return this.http.get<DrinkResponse>(`${cocktailDbEndpoint}/search.php?s=${searchTerm}`)
}

fetchSpecials() {
  return this.http.get<SpecialResponse>(`${specialsEndpoint}`)
}

betterFetchByName(name: string) {
  return this.fetchSpecials().pipe(
    map((response) =>
    response.drinks.find((drink) => drink.name === name)
    )
  )
}

fetchRandom() {
  return this.http.get<DrinkResponse>(`${cocktailDbEndpoint}/random.php`)
}

addSpecial(newSpecial: Special) {
  return this.http.post<SingleSpecialResponse>(`${specialsEndpoint}`, newSpecial, httpOptions)
}

editSpecial(updatedSpecial: Special) {
  return this.http.put<SingleSpecialResponse>(`${specialsEndpoint}/${updatedSpecial.id}`, updatedSpecial, httpOptions).subscribe()
}

deleteSpecial(id: number) {
  return this.http.delete<Special>(`${specialsEndpoint}/${id}`).subscribe()
}
}

