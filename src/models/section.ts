import { segment } from './segment';

export interface section {
  index: number;
  title: string;
  type: 'PRIMARY' | 'SECONDARY';
  segments: segment[];
}
