import { section } from "./section";

export interface appState {
    title: string;
    isActive: boolean;
    demoNumber: number;
    sections: section[]
}