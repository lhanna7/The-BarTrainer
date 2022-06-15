import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDrinkInfoComponent } from './random-drink-info.component';

describe('RandomDrinkInfoComponent', () => {
  let component: RandomDrinkInfoComponent;
  let fixture: ComponentFixture<RandomDrinkInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomDrinkInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomDrinkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
