import { Injectable } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { adapt } from "@state-adapt/angular";
import { appState } from "../models/app-state";
import { section1, section2, section3 } from "./default-app-data";
import { appAdapter } from "./app.adapter";

@Injectable({
    providedIn: "root",
  })
  export class AppService {

    private initialState: appState = {
        title: 'Initial State',
        sections: [section1, section2, section3]
    }

    private appStore = adapt(this.initialState, {
        path: "app",
        adapter: appAdapter
      });

    public appState$ = this.appStore.state$;

    constructor() {
        this.appStore.state$.pipe(takeUntilDestroyed()).subscribe();
    }

  }