import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { expirationDateValidator } from './utils/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  formSubmitted: boolean = false;

  accordianSections: { [key: string]: boolean } = {
    detailsSection: true,
    addressSection: true,
    paymentSection: true,
  };

  ngOnInit() {
    const detailsFields = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });

    const addressFields = this.formBuilder.group({
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      postCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });

    const paymentFields = this.formBuilder.group({
      creditCardNumber: ['', Validators.required],
      expiryDate: ['', [Validators.required, expirationDateValidator]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
      cardholderName: ['', Validators.required],
    });

    this.form = this.formBuilder.group({
      detailsSectionFields: detailsFields,
      addressSectionFields: addressFields,
      paymentSectionFields: paymentFields,
    });
  }

  // handle accordian
  toggleSection(section: string): void {
    this.accordianSections[section] = !this.accordianSections[section];
  }

  submitForm() {
    this.formSubmitted = true;

    if (this.form.valid) {
      // this is where we would include submission logic, for now I'll just give an alert & close all of the sections
      alert(
        `Form for ${
          this.form.get('detailsSectionFields.firstName')!.value
        } submitted!`
      );
      this.accordianSections['detailsSection'] = true;
      this.accordianSections['addressSection'] = true;
      this.accordianSections['paymentSection'] = true;
    } else {
      // all the field have to marked as touched in order to display validation errors
      this.markFormGroupAsTouched(this.form);

      this.updateSectionValidity('detailsSection', 'detailsSectionFields');
      this.updateSectionValidity('addressSection', 'addressSectionFields');
      this.updateSectionValidity('paymentSection', 'paymentSectionFields');
    }
  }

  markFormGroupAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupAsTouched(control);
      }
    });
  }

  isInvalid(controlPath: string, errorTypes: string[]): boolean {
    const control = this.form.get(controlPath);
    if (control && control.invalid && control.touched) {
      if (errorTypes) {
        return errorTypes.some((errorType) => control.hasError(errorType));
      }
      return true;
    }
    return false;
  }

  isFormGroupInvalid(groupName: string): boolean {
    const group = this.form.get(groupName) as FormGroup;
    return group.invalid && group.touched;
  }

  private updateSectionValidity(
    sectionName: string,
    formGroupName: string
  ): void {
    if (
      this.accordianSections[sectionName] &&
      this.isFormGroupInvalid(formGroupName)
    ) {
      this.accordianSections[sectionName] = false;
    }
  }
}
