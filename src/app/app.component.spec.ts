import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccordianSectionComponent } from './accordian-section/accordian-section.component';
import { AppComponent } from './app.component';

import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const validFormValues = {
  detailsSectionFields: {
    firstName: 'Sydney',
    lastName: 'Thomas',
    email: 'sydneythomas@hireme.com',
    phoneNumber: '222',
  },
  addressSectionFields: {
    street: 'Karl-Marx-Strasse',
    houseNumber: '24',
    postCode: '10963',
    city: 'Berlin',
    country: 'Germany',
  },
  paymentSectionFields: {
    creditCardNumber: '1234567890123456',
    expiryDate: '06/2023',
    cvv: '123',
    cardholderName: 'Sydney Thomas',
  },
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [AppComponent, AccordianSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const h1Element: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(h1Element).toBeTruthy();
    expect(h1Element.textContent).toContain('Your check-in details');
  });

  it('should check form validity and if invalid mark fields as touched on form submission', () => {
    component.form.controls['detailsSectionFields']
      .get('firstName')!
      .setValue(validFormValues.detailsSectionFields.firstName);
    component.form.controls['detailsSectionFields']
      .get('lastName')!
      .setValue('');
    component.form.controls['detailsSectionFields']
      .get('email')!
      .setValue('this is an invalid email');

    component.submitForm();

    expect(component.form.touched).toBe(true);

    component.form.setValue(validFormValues);
    component.submitForm();

    expect(component.accordianSections['detailsSection']).toBe(true);
    expect(component.accordianSections['addressSection']).toBe(true);
    expect(component.accordianSections['paymentSection']).toBe(true);
  });

  it('should set unfilled accordianSections to false on invalid form submission', () => {
    component.form.controls['detailsSectionFields']
      .get('firstName')!
      .setValue('');
    component.form.controls['addressSectionFields'].get('city')!.setValue('');
    component.form.controls['paymentSectionFields']
      .get('cvv')!
      .setValue('this is an invalid cvv');

    component.accordianSections['detailsSection'] = true;
    component.accordianSections['addressSection'] = false;
    component.accordianSections['paymentSection'] = true;

    component.submitForm();

    expect(component.accordianSections['detailsSection']).toBe(false);
    expect(component.accordianSections['addressSection']).toBe(false);
    expect(component.accordianSections['paymentSection']).toBe(false);
  });
});
