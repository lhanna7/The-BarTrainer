import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Drink } from './models/Drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
drinks: Drink[] = [{
  name: "Margarita",
  ingredients: "1.5oz Tequila, 1.5oz Triple Sec, 1oz Lime Juice, Salt",
  glass: "Cocktail Glass",
  instructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  image: "https://www.seriouseats.com/thmb/PIVqgfUtdn74p6KurPXlrNwlxKs=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__04__20150323-cocktails-vicky-wasik-margarita-c84b154e757d43688de15dc8f8ca0de9.jpg"
}, {
  name: "Lemon Drop",
  ingredients: "1.5oz Vodka, 1.5oz Cointreau, Juice of 1 wedge - Lemon",
  glass: "Cocktail Glass",
  instructions: "Shake and strain into a chilled cocktail glass rimmed with sugar.",
  image: "https://i0.wp.com/www.imbored-letsgo.com/wp-content/uploads/2013/07/Lemon-Drop-Martini_.jpg?ssl=1"
}, {
  name: "Bahama Mama",
  ingredients: "3 parts Rum, 1 part Dark Rum, 1 part Banana Liquor, 1 part Grenadine, 2 parts Pineapple Juice, 1 part Sweet & Sour",
  glass: "Highball Glass",
  instructions: "Add 2 parts club soda or more or less to taste. Mix it all together and pour over a bunch of ice. Drink with a straw.",
  image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F10%2F15%2Fbahama-mama-mr.jpg&q=60"
}]

fetchDrinks() {
  return of(this.drinks)
}
}
