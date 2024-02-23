import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { adapt } from '@state-adapt/angular';
import { appState } from '../models/app-state';
import { section1, section2, section3 } from './default-app-data';
import { appAdapter, initialState } from './app.adapter';
import { Source } from '@state-adapt/rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  /** ACTIONS */
  public moveSectionUp$ = new Source<number>('[SECTION] Move Up');
  public moveSectionDown$ = new Source<number>('[SECTION] Move Down');
  public removeSection$ = new Source<number>('[SECTION] Remove');
  public resetSections$ = new Source<void>('[SECTION] Reset');
  public clearSections$ = new Source<void>('[SECTION] Clear All');

  private appStore = adapt(initialState, {
    path: 'app',
    adapter: appAdapter,
    sources: {
      decrementSectionsIndexOfItem: this.moveSectionUp$,
      incrementSectionsIndexOfItem: this.moveSectionDown$,
      removeSectionsElementAtIndex: this.removeSection$,
      clearSectionsElements: this.clearSections$,
      resetSections: this.resetSections$,
    },
  });

  public appState$ = this.appStore.state$;

  constructor() {
    this.appStore.state$.pipe(takeUntilDestroyed()).subscribe();
  }
}
