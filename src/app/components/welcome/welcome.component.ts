import { Component, DestroyRef, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Angular Minimal template</h1>
  <p>--> {{ routeInfo }}</p>
  <button class="btn btn-plain">Test button</button>
  `,
  styles: []
})
export default class WelcomeComponent {

  @Input() routeInfo?: string;

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      // observable unsubscriptions etc...
    })
  }
}
