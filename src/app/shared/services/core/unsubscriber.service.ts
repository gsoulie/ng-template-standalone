import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Unsubscriber implements OnDestroy {

  private subscription$: Subscription = new Subscription();
  constructor() { }

  set anotherSubscription(sub: Subscription) { this.subscription$.add(sub); }

  ngOnDestroy(): void {
    if (this.subscription$) { this.subscription$.unsubscribe(); }
  }

  addSubscription(sub: Subscription): void { this.subscription$.add(sub); }

  protected resetSubscriptions() {
    if (this.subscription$) { this.subscription$.unsubscribe(); }
  }
}
