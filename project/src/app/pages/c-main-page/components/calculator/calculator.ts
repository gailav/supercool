import {Component, inject} from '@angular/core';
import {Button} from './components/button/button';
import {calculatorButtonConfig, calculatorFunctionsButtonsConfig} from './constants';
import {Display} from './components/display/display';
import {ButtonFunctionService} from './services/button-function-service';

@Component({
  selector: 'app-calculator',
  imports: [
    Button,
    Display
  ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss'
})
export class Calculator {
  calculatorNumberButtons = calculatorButtonConfig;
  calculatorFunctionsButtons = calculatorFunctionsButtonsConfig;
  buttonFunctionService = inject(ButtonFunctionService);

}
