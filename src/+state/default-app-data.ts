import { appState } from '../models/app-state';
import { segment } from '../models/segment';
import { row } from '../models/row';
import { cell } from '../models/cell';
import { section } from '../models/section';

export const cells_3: cell[] = [
  { name: 'one', value: 10 },
  { name: 'two', value: 20 },
  { name: 'three', value: 30 },
];

export const cells_5: cell[] = [
  { name: 'one', value: 10 },
  { name: 'two', value: 20 },
  { name: 'three', value: 30 },
  { name: 'four', value: 40 },
  { name: 'five', value: 50 },
];

export const cells_7: cell[] = [
  { name: 'one', value: 10 },
  { name: 'two', value: 20 },
  { name: 'three', value: 30 },
  { name: 'four', value: 40 },
  { name: 'five', value: 50 },
  { name: 'six', value: 60 },
  { name: 'seven', value: 70 },
];

export const rows3: row[] = [
  { index: 0, title: 'row 1', cells: cells_3 },
  { index: 1, title: 'row 2', cells: cells_3 },
  { index: 2, title: 'row 3', cells: cells_3 },
];

export const rows5: row[] = [
  { index: 0, title: 'row 1', cells: cells_5 },
  { index: 1, title: 'row 2', cells: cells_5 },
];

export const rows7: row[] = [
  { index: 0, title: 'row 1', cells: cells_7 },
  { index: 1, title: 'row 2', cells: cells_7 },
];

export const segments3: segment[] = [
  { index: 0, title: 'segment 1', rows: rows3 },
  { index: 1, title: 'segment 2', rows: rows3 },
];

export const segments5: segment[] = [
  { index: 0, title: 'segment 1', rows: rows5 },
  { index: 2, title: 'segment 2', rows: rows5 },
];

export const segments7: segment[] = [
  { index: 0, title: 'segment 1', rows: rows7 },
  { index: 1, title: 'segment 2', rows: rows7 },
];

export const section1: section = {
  index: 0,
  title: 'Section 1',
  type: 'PRIMARY',
  segments: segments3,
  isCollapsed: false,
};

export const section2: section = {
  index: 1,
  title: 'Section 2',
  type: 'PRIMARY',
  segments: segments5,
  isCollapsed: false,
};

export const section3: section = {
  index: 2,
  title: 'Section 3',
  type: 'SECONDARY',
  segments: segments7,
  isCollapsed: false,
};

export const defaultData: appState = {
  title: 'main app data',
  sections: [section1, section2, section3],
};
