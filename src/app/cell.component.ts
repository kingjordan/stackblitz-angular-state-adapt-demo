import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cell } from '../models/cell';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'demo-cell',
  template: `<div>
      <strong>{{ cell.name }}</strong>
    </div>
    <input class="text-input" type="text" [id]="'cell' + index" [(ngModel)]="cell.value" />`,
  styles: `
  .text-input{
    width: 30px;
  }`,
})
export class CellComponent {
  @Input() cell: cell = { name: '', value: 0 };
  @Input() first = false;
  @Input() last = false;
  @Input() index = 0;
}
