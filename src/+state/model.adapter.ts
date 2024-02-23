import { createAdapter } from "@state-adapt/core";
import { cell } from "../models/cell";
import { row } from "../models/row";
import { segment } from "../models/segment";
import { section } from "../models/section";

const cellAdapter = createAdapter<cell>()({
    setName: (state, name: string) => ({...state, name: name}),
    setValue: (state, value: number) => ({...state, value: value}),
    selectors: {
        name: (s) => s.name,
        value: (s) => s.value,
    }
});

const rowAdapter = createAdapter<row>()({
    setIndex: (state, index: number) => ({...state, index: index}),
    setTitle: (state, title: string) => ({...state, title: title}),
    setCells: (state, cells: cell[]) => ({...state, cells: cells}),
    selectors: {
        index: (s) => s.index,
        title: (s) => s.title,
        cells: (s) => s.cells
    }
})

const segmentAdapter = createAdapter<segment>()({
    setIndex: (state, index: number) => ({...state, index: index}),
    setTitle: (state, title: string) => ({...state, title: title}),
    setRows: (state, rows: row[]) => ({...state, rows: rows}),
    selectors: {
        index: (s) => s.index,
        title: (s) => s.title,
        rows: (s) => s.rows
    }
})

const sectionAdapter = createAdapter<section>()({
    setIndex: (state, index: number) => ({...state, index: index}),
    setTitle: (state, title: string) => ({...state, title: title}),
    setType: (state, type: string) => ({...state, title: type}),
    setSegments: (state, segments: segment[]) => ({...state, segments: segments}),
    selectors: {
        index: (s) => s.index,
        title: (s) => s.title,
        type: (s) => s.type,
        segments: (s) => s.segments
    }
})



