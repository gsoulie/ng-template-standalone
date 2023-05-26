import { Component, DestroyRef, Input, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Angular Minimal template</h1>
  <p>--> {{ routeInfo }}</p>
  <h2>Signal integration</h2>
  <ul>
    <li><span>Counter value : {{ counter() }}</span></li>
    <li><span>Computed value (^2): {{ pow() }}</span></li>
    <li><button class="btn btn-plain" (click)="increment()">Increment signal counter</button></li>
  </ul>
  `,
  styles: [
    `
    li { 
      list-style: none; 
      height: 30px;
    }
    `
  ]
})
export default class WelcomeComponent {

  @Input() routeInfo?: string;
  counter = signal<number>(1);
  pow = computed(() => Math.pow(this.counter(), 2));

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      // observable unsubscriptions etc...
    })
  }

  increment() {
    this.counter.update((old) => old + 1);
  }
}
