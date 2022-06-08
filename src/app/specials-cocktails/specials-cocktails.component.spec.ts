import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsCocktailsComponent } from './specials-cocktails.component';

describe('SpecialsCocktailsComponent', () => {
  let component: SpecialsCocktailsComponent;
  let fixture: ComponentFixture<SpecialsCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialsCocktailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
