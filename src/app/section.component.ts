import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { section } from '../models/section';
import { SegmentComponent } from './segment.component';

@Component({
  standalone: true,
  imports: [CommonModule, SegmentComponent],
  selector: 'demo-section',
  template: `
  <div class="section-wrap">
    <div>{{section.title}}  - {{section.type}}</div>
    @for (segment of segments: track segment.index; let idx = $index) {
    <div class="segment-wrap">
      <demo-segment [segment]="segment"/>
    </div>
  </div>
  }
  `,
  styles: `
  .section-wrap{
    display: flex;
    flex-direction: column;
  }
  `,
})
export class SectionComponent {
  @Input() section: section = {
    index: 0,
    title: '',
    type: 'PRIMARY',
    segments: [],
  };
  constructor() {}
}
