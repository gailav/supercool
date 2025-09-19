import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonFunctionService {
  displayValue = '';

  addValueToDisplay(value: string | undefined) {
    this.displayValue += value;
  }
}
