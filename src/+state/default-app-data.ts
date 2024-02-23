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

export const rows3A: row[] = [
  {
    index: 0,
    title: 'row A',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
    ],
  },
  {
    index: 1,
    title: 'row B',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
    ],
  },
  {
    index: 2,
    title: 'row C',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
    ],
  },
];

export const rows3B: row[] = [
  {
    index: 0,
    title: 'row A',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
    ],
  },
  {
    index: 1,
    title: 'row B',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
    ],
  },
  {
    index: 2,
    title: 'row C',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
    ],
  },
];

export const rows5A: row[] = [
  {
    index: 0,
    title: 'row A',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
      { name: 'four', value: 40 },
      { name: 'five', value: 50 },
    ],
  },
  {
    index: 1,
    title: 'row B',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
      { name: 'four', value: 40 },
      { name: 'five', value: 50 },
    ],
  },
];

export const rows5B: row[] = [
  {
    index: 0,
    title: 'row A',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
      { name: 'four', value: 40 },
      { name: 'five', value: 50 },
    ],
  },
  {
    index: 1,
    title: 'row B',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
      { name: 'four', value: 40 },
      { name: 'five', value: 50 },
    ],
  },
];

export const rows7A: row[] = [
  {
    index: 0,
    title: 'row A',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
      { name: 'four', value: 40 },
      { name: 'five', value: 50 },
      { name: 'six', value: 60 },
      { name: 'seven', value: 70 },
    ],
  },
  {
    index: 1,
    title: 'row B',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
      { name: 'four', value: 40 },
      { name: 'five', value: 50 },
      { name: 'six', value: 60 },
      { name: 'seven', value: 70 },
    ],
  },
];

export const rows7B: row[] = [
  {
    index: 0,
    title: 'row A',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
      { name: 'four', value: 40 },
      { name: 'five', value: 50 },
      { name: 'six', value: 60 },
      { name: 'seven', value: 70 },
    ],
  },
  {
    index: 1,
    title: 'row B',
    cells: [
      { name: 'one', value: 10 },
      { name: 'two', value: 20 },
      { name: 'three', value: 30 },
      { name: 'four', value: 40 },
      { name: 'five', value: 50 },
      { name: 'six', value: 60 },
      { name: 'seven', value: 70 },
    ],
  },
];

export const segments3: segment[] = [
  { index: 0, title: 'segment A', rows: rows3A },
  { index: 1, title: 'segment B', rows: rows3B },
];

export const segments5: segment[] = [
  { index: 0, title: 'segment A', rows: rows5A },
  { index: 1, title: 'segment B', rows: rows5B },
];

export const segments7: segment[] = [
  { index: 0, title: 'segment A', rows: rows7A },
  { index: 1, title: 'segment B', rows: rows7B },
];

export const section1: section = {
  index: 0,
  title: 'Section A',
  type: 'PRIMARY',
  segments: segments3,
  isCollapsed: false,
};

export const section2: section = {
  index: 1,
  title: 'Section B',
  type: 'PRIMARY',
  segments: segments5,
  isCollapsed: false,
};

export const section3: section = {
  index: 2,
  title: 'Section C',
  type: 'SECONDARY',
  segments: segments7,
  isCollapsed: false,
};

export const defaultData: appState = {
  title: 'main app data',
  sections: [section1, section2, section3],
};
