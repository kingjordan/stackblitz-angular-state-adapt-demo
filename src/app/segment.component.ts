import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { segment } from '../models/segment';
import { RowComponent } from './row.component';

@Component({
  standalone: true,
  imports: [CommonModule, RowComponent],
  selector: 'demo-segment',
  template: `
    <div class="segment-wrap">
      <div class="segment-header">
        <strong>Index <{{ index }}> </strong>
        <h4 class="segment-title">{{ segment.title }}</h4>
        @if (!first) {
        <button type="button" (click)="moveUp.emit(index)">Move Up</button>
        } @if (!last) {
        <button type="button" (click)="moveDown.emit(index)">Move Down</button>
        }
        <button type="button" (click)="remove.emit(index)">Remove</button>
        <button type="button" (click)="toggleCollapsed.emit(index)">
          {{ segment.isCollapsed ? 'Expand' : 'Collapse' }}
        </button>
        <button type="button" (click)="addRow.emit(index)">Add Row</button>
      </div>
      @if (!segment.isCollapsed) { @if (segment.rows && segment.rows.length > 0){ @for (row of segment.rows;
      track row.index; let idx = $index) {
      <div class="row-wrap">
        <demo-row [row]="row" />
      </div>
      } }}
    </div>
  `,
  styles: `
  .segment-wrap{
    display: flex;
    flex-direction: column;
    gap:5px;
  }
  .segment-header {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px 0 10px 10px;
    background-color: #f9f2fc;
  }
  .segment-title {
    color: purple;
  }
  .row-wrap {
    padding: 0 0 0 20px;
  }
  `,
})
export class SegmentComponent {
  @Input() segment: segment = { index: 0, title: '', rows: [] };
  @Input() first = false;
  @Input() last = false;
  @Input() index = 0;
  @Output() moveUp = new EventEmitter<number>();
  @Output() moveDown = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
  @Output() toggleCollapsed = new EventEmitter<number>();
  @Output() addRow = new EventEmitter<number>();
  constructor() {}
}
