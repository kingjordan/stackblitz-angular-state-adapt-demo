import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'demo-app',
  template: `app component works!`,
  styles: ``,
})
export class AppComponent {
  constructor() {}
}
