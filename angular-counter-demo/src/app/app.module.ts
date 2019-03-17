import { createCustomElement, NgElementConstructor } from "@angular/elements";
import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { TinkoffCounterComponent } from "./tinkoff-counter/tinkoff-counter.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [TinkoffCounterComponent],
  entryComponents: [TinkoffCounterComponent]
})
export class AppModule implements DoBootstrap {
  private readonly counter: NgElementConstructor<TinkoffCounterComponent>;

  constructor(private injector: Injector) {
    this.counter = createCustomElement(TinkoffCounterComponent, { injector: this.injector });
  }

  public ngDoBootstrap() {
    customElements.define('tinkoff-counter', this.counter)
  }
}
