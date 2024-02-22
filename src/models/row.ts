import { cell } from './cell';

export interface row {
  index: number;
  title: string;
  cells: cell[];
}
