import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specials-info',
  templateUrl: './specials-info.component.html',
  styleUrls: ['./specials-info.component.css']
})

export class SpecialsInfoComponent implements OnInit {
  @Input() id!: any;
  @Input() name!: any;
  @Input() glass!: any;
  @Input() method!: any;
  @Input() ingredient1!: any;
  @Input() ingredient2!: any;
  @Input() ingredient3!: any;
  @Input() ingredient4!: any;
  @Input() ingredient5!: any;
  @Input() ingredient6!: any;
  @Input() topper!: any;
  @Input() instruction1!: any;
  @Input() instruction2!: any;
  @Input() instruction3!: any;
  @Input() instruction4!: any;
  @Input() instruction5!: any;
  @Input() instruction6!: any;
  @Input() instruction7!: any;
  @Input() garnish!: any;
  @Input() imageurl!: any;

  ngOnInit() {

  }
}
