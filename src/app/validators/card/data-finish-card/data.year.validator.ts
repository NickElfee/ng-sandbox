import {AbstractControl} from "@angular/forms";

export function dataYearValidator(input: AbstractControl): {[key: string]: boolean} | null{
  let date = new Date().getFullYear() + '';
  let myDate = date[2] + date[3];
  let inputDate = input.value[2] + input.value[3];
  if((+myDate + 5) < +inputDate || +inputDate < +myDate) {
    return {dataYearValidator: true};
  }
  return null;
}
