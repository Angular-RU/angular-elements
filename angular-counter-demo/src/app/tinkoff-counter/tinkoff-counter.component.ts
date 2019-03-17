import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tinkoff-counter',
  templateUrl: './tinkoff-counter.component.html',
  styleUrls: ['./tinkoff-counter.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TinkoffCounterComponent {
  public value: number = 0;
  public increment(): void {
    this.value++;
  }

  public decrement(): void {
    this.value--;
  }
}
