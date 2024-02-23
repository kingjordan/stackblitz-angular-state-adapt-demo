import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { row } from '../models/row';
import { CellComponent } from './cell.component';

@Component({
  standalone: true,
  imports: [CommonModule, CellComponent],
  selector: 'demo-row',
  template: `
    <div class="row-wrap">
      <div class="row-title">
        <strong>{{ row.title }}</strong> {{ ' i' + index }} {{ ' ri' + row.index }}
      </div>
      @if (row.cells && row.cells.length > 0){ @for (cell of row.cells; track cell.name; let idx = $index; let
      first = $first; let last = $last) {
      <div class="cell-wrap">
        <demo-cell [cell]="cell" [index]="idx" />
      </div>
      } @if (!first) {
      <button type="button" (click)="moveUp.emit(index)">Move Up</button>
      } @if (!last) {
      <button type="button" (click)="moveDown.emit(index)">Move Down</button>
      }
      <button type="button" (click)="remove.emit(index)">Remove</button>
      }
    </div>
  `,
  styles: `
  .row-wrap{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }
  .row-title {
    color: darkblue;
  }
  `,
})
export class RowComponent {
  @Input() row: row = { index: 0, title: '', cells: [] };
  @Input() first = false;
  @Input() last = false;
  @Input() index = 0;
  @Output() moveUp = new EventEmitter<number>();
  @Output() moveDown = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
  constructor() {}
}
