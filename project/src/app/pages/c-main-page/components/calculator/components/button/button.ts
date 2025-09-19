import {Component, computed, Input, input, OnInit, output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button implements OnInit {
  buttonValue = input<string>();
  buttonColour = input<string>();
  buttonWidth = input<number | undefined>(1);
  buttonZeroWidth = computed(() => this.buttonWidth() ? 95 * (this.buttonWidth() as number): 80);
  // this is same as above
  // {
  //   if (this.buttonWidth()) {
  //     return 300 * (this.buttonWidth() as number);
  //   }
  //   else {
  //     return 300;
  //   }
  // })
  buttonClickedEvent = output<string | undefined>();
  ngOnInit(): void {
    console.log(this.buttonWidth);
    console.log(this.buttonWidth());
  }
}

