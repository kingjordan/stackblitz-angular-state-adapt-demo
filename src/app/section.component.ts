import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { section } from '../models/section';
import { SegmentComponent } from './segment.component';

@Component({
  standalone: true,
  imports: [CommonModule, SegmentComponent],
  selector: 'demo-section',
  template: `
    <div class="section-wrap">
      <div class="section-header">
        <strong>Index <{{ index }}> </strong>
        <h3 class="section-title">{{ section.title }} - {{ section.type }}</h3>
        @if (!first) {
        <button type="button" (click)="moveUp.emit(index)">Move Up</button>
        } @if (!last) {
        <button type="button" (click)="moveDown.emit(index)">Move Down</button>
        }
        <button type="button" (click)="remove.emit(index)">Remove</button>
      </div>
      @if (section.segments && section.segments.length > 0){ @for (segment of section.segments; track
      segment.index; let idx = $index) {
      <div class="segment-wrap">
        <demo-segment [segment]="segment" />
      </div>
      } }
    </div>
  `,
  styles: `
  .section-wrap {
    display: flex;
    flex-direction: column;
  }
  .section-header {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    padding-top: 30px;
  }
  .section-title {
    color: darkorange;
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
  @Input() first = false;
  @Input() last = false;
  @Input() index = 0;
  @Output() moveUp = new EventEmitter<number>();
  @Output() moveDown = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
  constructor() {}
}
