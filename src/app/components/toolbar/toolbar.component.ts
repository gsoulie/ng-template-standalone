import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div id="toolbar__container">
    <span id="toolbar__title">{{ title }}</span>
  </div>
  `,
  styles: [
    `
    #toolbar__container {
      background-color: var(--color-primary);
      display: flex;
      min-height: 54px;
      width: 100%;
      align-items: center;
    }
    #toolbar__title {
      color: white;
      font-size: 1.5em;
      margin-left: 20px;      
    }
    `
  ]
})
export class ToolbarComponent {
  @Input({ required: true }) title: string = '';

}
