import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SectionComponent } from './section.component';
import { AppService } from '../+state/app.service';
import { rows3, section1, segments3 } from '../+state/default-app-data';
import { segment } from '../models/segment';
import { section } from '../models/section';

@Component({
  standalone: true,
  imports: [CommonModule, SectionComponent],
  selector: 'demo-app',
  template: `
    <div class="app-wrapper">
      <div class="app-content">
        <h1>Angular State Adapt Demo</h1>
        @if (appService.appState$ | async; as appState) {
        <div class="app-header">
          <h2>{{ appState.title }}</h2>
          <button type="button" (click)="appService.resetSections$.next()">Reset State</button>
          <button type="button" (click)="appService.clearSections$.next()">Clear Sections</button>
          <button type="button" (click)="appService.addSectionToEnd$.next(sectionToAdd)">Add Section</button>
          <button type="button" (click)="appService.collapseAllSections$.next()">
            Collapse All Sections
          </button>
          <button type="button" (click)="appService.expandAllSections$.next()">Expand All Sections</button>
        </div>
        @if (appState.sections && appState.sections.length > 0){ @for (section of appState.sections; track
        section.index; let idx = $index; let first = $first; let last = $last) {
        <div class="section-wrap">
          <demo-section
            [section]="section"
            [first]="first"
            [last]="last"
            [index]="idx"
            (moveDown)="appService.moveSectionDown$.next(idx)"
            (moveUp)="appService.moveSectionUp$.next(idx)"
            (remove)="appService.removeSection$.next(idx)"
            (toggleCollapsed)="appService.toggleCollapsed$.next(idx)"
            (addSegment)="appService.addSegmentToSection$.next({ targetSectionIndex: idx, segment: segmentToAdd })"
          />
        </div>
        } } }
      </div>
      <div class="app-actions">
        <h3>App Actions</h3>
        @for (action of appService.actions; track action; let idx = $index) {
        <div>{{ action }}</div>
        }
      </div>
      <div class="app-data">
        <h3>App data</h3>
        <pre>{{ appService.appState$ | async | json }}</pre>
      </div>
    </div>
  `,
  styles: `
  .app-wrapper {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .app-header {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    background-color: #fafcff;
    padding: 0px 0 20px 20px;

  }
  .app-content{
    width: 600px;
  }
  .app-actions{
    min-width: 250px;
    background-color: #f5f5f5;
    padding: 20px;
  }
  .app-data {
    padding: 20px;
  }
  `,
})
export class AppComponent {
  public appService = inject(AppService);
  public sectionToAdd: section = { ...section1, title: 'New Section' };
  public segmentToAdd: segment = { index: 0, title: 'New Segment', rows: rows3 };
}
