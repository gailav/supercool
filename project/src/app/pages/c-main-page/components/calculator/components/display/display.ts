import {Component, input} from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.html',
  styleUrl: './display.scss'
})
export class Display {
displayValue = input<string | undefined>();
}
