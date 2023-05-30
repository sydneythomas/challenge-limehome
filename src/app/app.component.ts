import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { addClass, hasClass, removeClass } from './utils/toggle-class/dom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  formSubmitted: boolean = false;

  detailsSectionFilled: boolean = false;
  adressSectionFilled: boolean = false;
  paymentSectionFilled: boolean = false;

  detailsSectionFields: { [key: string]: string } = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };

  addressSectionFields: { [key: string]: string } = {
    street: '',
    houseNumber: '',
    postCode: '',
    city: '',
    country: '',
  };

  paymentSectionFields: { [key: string]: string } = {
    creditCardNumber: '',
    expiryDate: '',
    CVV: '',
    cardholderName: '',
  };

  submitForm(form: NgForm): void {
    this.formSubmitted = true;

    if (form.valid) {
      // Form submission logic
      alert(`Form for ${this.detailsSectionFields['firstName']} submitted!`);
    }
  }
}
