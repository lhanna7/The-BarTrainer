import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDrinkResultsComponent } from './random-drink-results.component';

describe('RandomDrinkResultsComponent', () => {
  let component: RandomDrinkResultsComponent;
  let fixture: ComponentFixture<RandomDrinkResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomDrinkResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomDrinkResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
