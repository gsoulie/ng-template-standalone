import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ToolbarComponent
  ]
})
export class AppComponent {
}
