import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drink-info',
  templateUrl: './drink-info.component.html',
  styleUrls: ['./drink-info.component.css']
})
export class DrinkInfoComponent {
  @Input() name!: string;
  @Input() ingredients!: string;
  @Input() glass!: string;
  @Input() instructions!: string;
  @Input() image!: string;

  }

