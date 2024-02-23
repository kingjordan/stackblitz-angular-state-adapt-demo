import { row } from './row';

export interface segment {
  index: number;
  title: string;
  isCollapsed?: boolean;
  rows: row[];
}
