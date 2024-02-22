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
    <h3 class="section-title">{{section.title}}  - {{section.type}}</h3>
    @if (section.segments && section.segments.length > 0){
      @for (segment of section.segments; track segment.index; let idx = $index) {
      <div class="segment-wrap">
        <demo-segment [segment]="segment"/>
      </div>
      }
    }
  </div>
  `,
  styles: `
  .section-wrap {
    display: flex;
    flex-direction: column;
  }
  .section-title {
    color: darkorange;
    padding-top: 30px;
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
