import { createAdapter, joinAdapters } from '@state-adapt/core';
import { moveElement } from './utils';
import { section } from '../models/section';
import { appState } from '../models/app-state';
import { baseStringAdapter } from '@state-adapt/core/adapters';
import { section1, section2, section3 } from './default-app-data';
import { segment } from '../models/segment';

export interface addSegmentToSectionAction {
  targetSectionIndex: number;
  segment: segment;
}

const sectionArrayAdapter = createAdapter<section[]>()({
  incrementIndexOfItem: (state, targetIndex: number) => moveElement(state, targetIndex, targetIndex + 1),
  decrementIndexOfItem: (state, targetIndex: number) => moveElement(state, targetIndex, targetIndex - 1),
  removeElementAtIndex: (state, targetIndex: number) => state.filter((_, i) => i !== targetIndex),
  toggleCollapsedAtIndex: (state, targetIndex: number) => (
    state.forEach((s, i) => (i === targetIndex ? (s.isCollapsed = !s.isCollapsed) : s)), state
  ),
  addElementToEnd: (state, element: section) => [...state, element],
  addSegmentToElementAtIndex: (state, action: addSegmentToSectionAction) => (
    state.forEach((s, i) => (i === action.targetSectionIndex ? s.segments.push(action.segment) : s)), state
  ),
  collapseAll: (state) => state.map((state) => ({ ...state, isCollapsed: true })),
  expandAll: (state) => state.map((state) => ({ ...state, isCollapsed: false })),
  clearElements: () => [],
  selectors: {
    sectionLength: (s) => s.length,
    sectionElements: (s) => s,
  },
});

export const initialState: appState = {
  title: 'Initial State',
  sections: [section1, section2, section3],
};

export const appAdapter = joinAdapters<appState>()({
  title: baseStringAdapter,
  sections: sectionArrayAdapter,
})();
