import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { row } from '../models/row';
import { CellComponent } from './cell.component';

@Component({
  standalone: true,
  imports: [CommonModule, CellComponent],
  selector: 'demo-row',
  template: `
  <div class="row-wrap">
    <div class="row-title">{{row.title}} </div>
    @if (row.cells && row.cells.length > 0){
      @for (cell of row.cells; track cell.name; let idx = $index) {
      <div class="cell-wrap">
        <demo-cell [cell]="cell"/>
      </div>
      }
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
  constructor() {}
}
