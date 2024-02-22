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
    <div>{{row.title}} </div>
    @for (cell of cells: track cell.index; let idx = $index) {
    <div class="cell-wrap">
      <demo-cell [cell]="cell"/>
    </div>
  </div>
  }
  `,
  styles: `
  .row-wrap{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  `,
})
export class RowComponent {
  @Input() row: row = { index: 0, title: '', cells: [] };
  constructor() {}
}
