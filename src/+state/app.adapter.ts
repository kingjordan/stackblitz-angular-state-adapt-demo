import { createAdapter, joinAdapters } from "@state-adapt/core"
import { moveElement } from "./utils"
import { section } from "../models/section"
import { appState } from "../models/app-state"
import { baseStringAdapter } from "@state-adapt/core/adapters"


const sectionArrayAdapter = createAdapter<section[]>()({
    incrementIndexOfItem: (state, targetIndex: number)=> (moveElement(state, targetIndex, targetIndex + 1)),
    decrementIndexOfItem: (state, targetIndex: number)=> (moveElement(state, targetIndex, targetIndex - 1)),
    removeElementAtIndex: (state, targetIndex: number)=> (state.splice(targetIndex, 1)),
    addElementToEnd: (state, element: section)=> ([...state, element]),
    clearElements: () => ([]),
    selectors: {
        sectionLength: (s) => s.length,
        sectionElements: (s) => s
    }
})

export const appAdapter = joinAdapters<appState>()({
    title: baseStringAdapter,
    sections: sectionArrayAdapter
})();
