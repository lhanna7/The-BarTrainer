import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageSearchDrinkComponent } from './landing-page-search-drink.component';

describe('LandingPageSearchDrinkComponent', () => {
  let component: LandingPageSearchDrinkComponent;
  let fixture: ComponentFixture<LandingPageSearchDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageSearchDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageSearchDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
