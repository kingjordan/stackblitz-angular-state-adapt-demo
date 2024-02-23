import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { segment } from '../models/segment';
import { RowComponent } from './row.component';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, RowComponent],
  selector: 'demo-segment',
  template: `
    <div class="segment-wrap">
      <div class="segment-header">
        <div class="title-content">
          <h4 class="segment-title">{{ segment.title }}</h4>
          <strong>Index <{{ index }}> objIdx: {{ segment.index }} </strong>
        </div>
        <div class="segment-commands">
          @if (!first) {
          <button type="button" (click)="moveUp.emit(index)">Up</button>
          } @if (!last) {
          <button type="button" (click)="moveDown.emit(index)">Down</button>
          }
          <button type="button" (click)="remove.emit(index)">Delete</button>
          <button type="button" (click)="toggleCollapsed.emit(index)">
            {{ segment.isCollapsed ? 'Expand' : 'Collapse' }}
          </button>
          <button type="button" (click)="addRow.emit(index)">Add Row</button>
        </div>
      </div>
      @if (!segment.isCollapsed) { @if (segment.rows && segment.rows.length > 0){ @for (row of segment.rows;
      track row; let idx = $index; let first = $first; let last = $last) {
      <div class="row-wrap">
        <demo-row
          [row]="row"
          [first]="first"
          [last]="last"
          [index]="idx"
          (moveUp)="moveRowUp.emit({ targetSegmentIndex: segment.index, targetRowIndex: idx })"
          (moveDown)="moveRowDown.emit({ targetSegmentIndex: segment.index, targetRowIndex: idx })"
          (remove)="removeRow.emit({ targetSegmentIndex: segment.index, targetRowIndex: idx })"
        />
      </div>
      } } }
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
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0px 0 10px 10px;
    background-color: #f9f2fc;
  }
  .segment-commands {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    padding: 0 15px 0 0;
  }
  .segment-title {
    color: purple;
  }
  .title-content{
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
  .row-wrap {
    padding: 0 0 0 10px;
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
  @Output() moveRowUp = new EventEmitter<{ targetSegmentIndex: number; targetRowIndex: number }>();
  @Output() moveRowDown = new EventEmitter<{ targetSegmentIndex: number; targetRowIndex: number }>();
  @Output() removeRow = new EventEmitter<{ targetSegmentIndex: number; targetRowIndex: number }>();
  constructor() {}
}
