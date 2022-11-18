import { Injectable } from '@angular/core';
import { fabric } from 'fabric';

@Injectable({
    providedIn: 'root',
})
export class UndoRedoServiceService {
    eventStack: any[] = [];
    canvas!: fabric.Canvas;

    constructor() {}

    addState(state: any) {
        this.eventStack.push(state.CanvasList.canvasState);
    }

    undoOperation() {
        return this.eventStack.pop();
    }

    redoOperation() {}
}
