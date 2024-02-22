import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { defaultStoreProvider } from '@state-adapt/angular';
import 'zone.js';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'app-root',
  imports: [AppComponent],
  standalone: true,
  template: `<demo-app />`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [defaultStoreProvider],
}).catch((err) => console.error(err));
