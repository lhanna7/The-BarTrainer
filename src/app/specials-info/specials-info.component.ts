import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specials-info',
  templateUrl: './specials-info.component.html',
  styleUrls: ['./specials-info.component.css']
})

export class SpecialsInfoComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() glass!: string;
  @Input() method!: string;
  @Input() ingredient1!: string;
  @Input() ingredient2!: string;
  @Input() ingredient3!: string;
  @Input() ingredient4!: string;
  @Input() ingredient5!: string;
  @Input() ingredient6!: string;
  @Input() topper!: string;
  @Input() instruction1!: string;
  @Input() instruction2!: string;
  @Input() instruction3!: string;
  @Input() instruction4!: string;
  @Input() instruction5!: string;
  @Input() instruction6!: string;
  @Input() instruction7!: string;
  @Input() garnish!: string;
  @Input() imageurl!: string;
}
