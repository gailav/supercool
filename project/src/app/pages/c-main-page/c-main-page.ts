import { Component } from '@angular/core';
import {Calculator} from './components/calculator/calculator';

@Component({
  selector: 'app-c-main-page',
  imports: [
    Calculator
  ],
  templateUrl: './c-main-page.html',
  styleUrl: './c-main-page.scss'
})
export class CMainPage {

}
