import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { adapt } from '@state-adapt/angular';
import {
  addRowToSegmentAction,
  addSegmentToSectionAction,
  appAdapter,
  initialState,
  rowOfSegmentOfSectionAction,
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
  public resetSections$ = new Source<void>('[APP STATE] Reset');
  public clearSections$ = new Source<void>('[APP STATE] Clear All');
  public moveSectionUp$ = new Source<number>('[SECTION] Move Up');
  public moveSectionDown$ = new Source<number>('[SECTION] Move Down');
  public removeSection$ = new Source<number>('[SECTION] Remove');
  public addSectionToEnd$ = new Source<section>('[SECTION] Add to End');
  public collapseAllSections$ = new Source<void>('[SECTION] Collapse All');
  public expandAllSections$ = new Source<void>('[SECTION] Expand All');
  public toggleCollapsed$ = new Source<number>('[SECTION] Toggle Collapsed');
  // SEGMENT ACTIONS
  public addSegmentToSection$ = new Source<addSegmentToSectionAction>('[SEGMENT] Add Segment to Section');
  public removeSegmentFromSection$ = new Source<segmentOfSectionAction>(
    '[SEGMENT] Remove Segment from Section'
  );
  public moveSegmentUp$ = new Source<segmentOfSectionAction>('[SEGMENT] Move Segment Up');
  public moveSegmentDown$ = new Source<segmentOfSectionAction>('[SEGMENT] Move Segment Down');
  public toggleSegmentCollapsed$ = new Source<segmentOfSectionAction>('[SEGMENT] Toggle Segment Collapsed');
  // ROW ACTIONS
  public addRowToSegment$ = new Source<addRowToSegmentAction>('[ROW] Add Row to Segment');
  public moveRowUp$ = new Source<rowOfSegmentOfSectionAction>('[ROW] Move Row Up');
  public moveRowDown$ = new Source<rowOfSegmentOfSectionAction>('[ROW] Move Row Down');
  public removeRow$ = new Source<rowOfSegmentOfSectionAction>('[ROW] Remove Row');

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
      toggleSectionsSegmentCollapsedAtIndex: this.toggleSegmentCollapsed$,
      addSectionsRowToSegmentEnd: this.addRowToSegment$,
      decrementSectionsIndexOfRow: this.moveRowUp$,
      incrementSectionsIndexOfRow: this.moveRowDown$,
      removeSectionsRowAtIndex: this.removeRow$,
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
      this.moveSegmentDown$,
      this.toggleSegmentCollapsed$,
      this.addRowToSegment$,
      this.moveRowUp$,
      this.moveRowDown$,
      this.removeRow$
    )
      .pipe(
        tap((action) => console.log(action.type, action.payload ? action.payload : '')),
        tap((action) => this.actions.push(action.type)),
        takeUntilDestroyed()
      )
      .subscribe();
  }
}
