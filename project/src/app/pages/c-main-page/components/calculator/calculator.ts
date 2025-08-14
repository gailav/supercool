import { Component } from '@angular/core';
import {Button} from './components/button/button';
import {calculatorButtonConfig} from './constants';

@Component({
  selector: 'app-calculator',
  imports: [
    Button
  ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss'
})
export class Calculator {
  calculatorNumberButtons = calculatorButtonConfig
}
