import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SectionComponent } from './section.component';
import { defaultData } from '../+state/default-app-data';
import { appState } from '../models/app-state';
import { AppService } from '../+state/app.service';

@Component({
  standalone: true,
  imports: [CommonModule, SectionComponent],
  selector: 'demo-app',
  template: `
  <h1>Angular State Adapt Demo</h1>
  @if (appService.appState$ | async; as appState) {
    <h2>{{appState.title}}</h2>
    @if (appState.sections && appState.sections.length > 0){
      @for (section of appState.sections; track section.index; let idx = $index) {
        <div class="section-wrap">
          <demo-section [section]="section" />
        </div>
      }
    }
  }
  `,
  styles: ``,
})
export class AppComponent {
  public appService = inject(AppService);
}
