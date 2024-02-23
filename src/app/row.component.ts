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
      @if (row.cells && row.cells.length > 0){
        <div class="row-contents">
          <div class="row-title">
            <strong>{{ row.title }}</strong> {{ ' i' + index }} {{ ' ri' + row.index }}
          </div>
          @for (cell of row.cells; track cell.name; let idx = $index; let first = $first; let last = $last) {
          <div class="cell-wrap">
            <demo-cell [cell]="cell" [index]="idx" [first]="first" [last]="last" />
          </div>
          }
        </div>
        <div class="row-commands">
          @if (!first) {
          <button type="button" (click)="moveUp.emit(index)">Up</button>
          } @if (!last) {
          <button type="button" (click)="moveDown.emit(index)">Down</button>
          }
          <button type="button" (click)="remove.emit(index)">Delete</button>
        </div>
      }
    </div>
  `,
  styles: `
  .row-wrap{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .row-contents{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }
  .row-title {
    color: darkblue;
    width: 110px;
  }
  .row-commands {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    padding: 0 15px 0 0;
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
