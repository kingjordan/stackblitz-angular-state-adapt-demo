import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { section } from '../models/section';
import { SegmentComponent } from './segment.component';
import { segmentOfSectionAction } from '../+state/app.adapter';

@Component({
  standalone: true,
  imports: [CommonModule, SegmentComponent],
  selector: 'demo-section',
  template: `
    <div class="section-wrap">
      <div class="section-header">
        <h3 class="section-title">{{ section.title }} - {{ section.type }}</h3>
        <strong>Index <{{ index }}> objIdx: {{section.index}}</strong>
        @if (!first) {
        <button type="button" (click)="moveUp.emit(index)">Move Up</button>
        } @if (!last) {
        <button type="button" (click)="moveDown.emit(index)">Move Down</button>
        }
        <button type="button" (click)="remove.emit(index)">Remove</button>
        <button type="button" (click)="toggleCollapsed.emit(index)">
          {{ section.isCollapsed ? 'Expand' : 'Collapse' }}
        </button>
        <button type="button" (click)="addSegment.emit(index)">Add Segment</button>
      </div>
      @if (!section.isCollapsed) { @if (section.segments && section.segments.length > 0){ @for (segment of
      section.segments; track segment.index; let idx = $index; let first = $first; let last = $last) {
      <div class="segment-wrap">
        <demo-segment
          [segment]="segment"
          [first]="first"
          [last]="last"
          [index]="idx"
          (remove)="removeSegment.emit({ targetSectionIndex: index, targetSegmentIndex: $event })"
          (moveUp)="moveSegmentUp.emit({ targetSectionIndex: index, targetSegmentIndex: $event })"
          (moveDown)="moveSegmentDown.emit({ targetSectionIndex: index, targetSegmentIndex: $event })"
          (toggleCollapsed)="toggleSegmentCollapsed.emit({ targetSectionIndex: index, targetSegmentIndex: $event })"
          (addRow)="addRowToSegment.emit({ targetSectionIndex: index, targetSegmentIndex: $event })"
        />
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
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px 0 10px 20px;
    background-color: #fffcf7
  }
  .section-title {
    color: darkorange;
  }
  .segment-wrap {
    padding: 0 0 30px 10px;
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
  @Output() addSegment = new EventEmitter<number>();
  @Output() removeSegment = new EventEmitter<segmentOfSectionAction>();
  @Output() moveSegmentUp = new EventEmitter<segmentOfSectionAction>();
  @Output() moveSegmentDown = new EventEmitter<segmentOfSectionAction>();
  @Output() toggleSegmentCollapsed = new EventEmitter<segmentOfSectionAction>();
  @Output() addRowToSegment = new EventEmitter<segmentOfSectionAction>();
}
