import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsInfoComponent } from './specials-info.component';

describe('SpecialsInfoComponent', () => {
  let component: SpecialsInfoComponent;
  let fixture: ComponentFixture<SpecialsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
