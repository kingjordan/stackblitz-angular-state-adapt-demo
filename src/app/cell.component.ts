import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cell } from '../models/cell';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'demo-cell',
  template: `<div>{{cell.name}} </div><div>{{cell.value}} </div>`,
  styles: ``,
})
export class CellComponent {
  @Input() cell: cell = { name: '', value: 0 };
}
