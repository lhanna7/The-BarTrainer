import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsResultsComponent } from './specials-results.component';

describe('SpecialsResultsComponent', () => {
  let component: SpecialsResultsComponent;
  let fixture: ComponentFixture<SpecialsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
