import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { segment } from '../models/segment';

@Component({
  standalone: true,
  imports: [CommonModule, RowComponent],
  selector: 'demo-segment',
  template: `
  <div class="segment-wrap">
    <div>{{segment.title}} </div>
    @for (row of rows: track row.index; let idx = $index) {
    <div class="row-wrap">
      <demo-row [row]="row"/>
    </div>
  </div>
  }
  `,
  styles: `
  .segment-wrap{
    display: flex;
    flex-direction: column;
  }
  `,
})
export class SegmentComponent {
  @Input() segment: segment = { index: 0, title: '', rows: [] };
  constructor() {}
}
