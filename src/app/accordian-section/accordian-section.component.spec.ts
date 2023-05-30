import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianSectionComponent } from './accordian-section.component';

describe('AccordianSectionComponent', () => {
  let component: AccordianSectionComponent;
  let fixture: ComponentFixture<AccordianSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
