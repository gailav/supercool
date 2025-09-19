import { Component } from '@angular/core';
import {Button} from './components/button/button';
import {calculatorButtonConfig, calculatorFunctionsButtonsConfig} from './constants';
import {Display} from './components/display/display';

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
}
