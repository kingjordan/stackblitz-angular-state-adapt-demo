import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { segment } from '../models/segment';
import { RowComponent } from './row.component';

@Component({
  standalone: true,
  imports: [CommonModule, RowComponent],
  selector: 'demo-segment',
  template: `
  <div class="segment-wrap">
    <h4 class="segment-title">{{segment.title}} </h4>
    @if (segment.rows && segment.rows.length > 0){
      @for (row of segment.rows; track row.index; let idx = $index) {
      <div class="row-wrap">
        <demo-row [row]="row"/>
      </div>
      }
    }
  </div>
  `,
  styles: `
  .segment-wrap{
    display: flex;
    flex-direction: column;
    gap:5px;
  }
  .segment-title {
    color: purple;
  }
  `,
})
export class SegmentComponent {
  @Input() segment: segment = { index: 0, title: '', rows: [] };
  constructor() {}
}
