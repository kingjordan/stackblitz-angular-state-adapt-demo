import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { adapt } from '@state-adapt/angular';
import {
  addSegmentToSectionAction,
  appAdapter,
  initialState,
  segmentOfSectionAction,
} from './app.adapter';
import { Source } from '@state-adapt/rxjs';
import { merge, tap } from 'rxjs';
import { section } from '../models/section';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public actions: string[] = ['@@INIT', 'INIT App'];

  /** ACTIONS */
  public moveSectionUp$ = new Source<number>('[SECTION] Move Up');
  public moveSectionDown$ = new Source<number>('[SECTION] Move Down');
  public removeSection$ = new Source<number>('[SECTION] Remove');
  public resetSections$ = new Source<void>('[SECTION] Reset');
  public clearSections$ = new Source<void>('[SECTION] Clear All');
  public addSectionToEnd$ = new Source<section>('[SECTION] Add to End');
  public collapseAllSections$ = new Source<void>('[SECTION] Collapse All');
  public expandAllSections$ = new Source<void>('[SECTION] Expand All');
  public toggleCollapsed$ = new Source<number>('[SECTION] Toggle Collapsed');
  public addSegmentToSection$ = new Source<addSegmentToSectionAction>('[SECTION] Add Segment to Section');
  public removeSegmentFromSection$ = new Source<segmentOfSectionAction>(
    '[SECTION] Remove Segment from Section'
  );
  public moveSegmentUp$ = new Source<segmentOfSectionAction>('[SECTION] Move Segment Up');
  public moveSegmentDown$ = new Source<segmentOfSectionAction>('[SECTION] Move Segment Down');

  private appStore = adapt(initialState, {
    path: 'app',
    adapter: appAdapter,
    sources: {
      decrementSectionsIndexOfItem: this.moveSectionUp$,
      incrementSectionsIndexOfItem: this.moveSectionDown$,
      removeSectionsElementAtIndex: this.removeSection$,
      clearSectionsElements: this.clearSections$,
      resetSections: this.resetSections$,
      addSectionsElementToEnd: this.addSectionToEnd$,
      collapseSectionsAll: this.collapseAllSections$,
      expandSectionsAll: this.expandAllSections$,
      toggleSectionsCollapsedAtIndex: this.toggleCollapsed$,
      addSectionsSegmentToElementAtIndex: this.addSegmentToSection$,
      removeSectionsSegmentAtIndex: this.removeSegmentFromSection$,
      incrementSectionsIndexOfSegment: this.moveSegmentDown$,
      decrementSectionsIndexOfSegment: this.moveSegmentUp$,
    },
  });

  public appState$ = this.appStore.state$;

  constructor() {
    this.appStore.state$.pipe(takeUntilDestroyed()).subscribe();

    merge(
      this.moveSectionDown$,
      this.moveSectionUp$,
      this.removeSection$,
      this.resetSections$,
      this.clearSections$,
      this.addSectionToEnd$,
      this.collapseAllSections$,
      this.expandAllSections$,
      this.toggleCollapsed$,
      this.addSegmentToSection$,
      this.removeSegmentFromSection$,
      this.moveSegmentUp$,
      this.moveSegmentDown$
    )
      .pipe(
        tap((action) => console.log(action.type, action.payload ? action.payload : '')),
        tap((action) => this.actions.push(action.type)),
        takeUntilDestroyed()
      )
      .subscribe();
  }
}
