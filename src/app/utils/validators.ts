import { AbstractControl, ValidationErrors } from '@angular/forms';

export function expirationDateValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;

  // check the format MM/YYYY
  if (!/^\d{2}\/\d{4}$/.test(value)) {
    return { invalidFormat: true };
  }

  // check if the date is expired
  const [month, year] = value.split('/');

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const expirationDate = new Date(Number(year), Number(month) - 1);

  if (
    expirationDate < currentDate ||
    (Number(year) === currentDate.getFullYear() && Number(month) < currentMonth)
  ) {
    return { dateExpired: true };
  }

  return null;
}
