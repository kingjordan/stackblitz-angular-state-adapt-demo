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
        <button type="button" (click)="toggleCollapsed.emit(index)">
          {{ section.isCollapsed ? 'Expand' : 'Collapse' }}
        </button>
      </div>
      @if (!section.isCollapsed) { @if (section.segments && section.segments.length > 0){ @for (segment of
      section.segments; track segment.index; let idx = $index) {
      <div class="segment-wrap">
        <demo-segment [segment]="segment" />
      </div>
      } } }
    </div>
  `,
  styles: `
  .section-wrap {
    display: flex;
    flex-direction: column;
    border: 1px solid #ffdfab;
    margin: 5px 0;
  }
  .section-header {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px 0 10px 20px;
    background-color: #fffcf7
  }
  .section-title {
    color: darkorange;
  }
  .segment-wrap {
    padding: 0 0 30px 30px;
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
  @Output() toggleCollapsed = new EventEmitter<number>();
  constructor() {}
}
