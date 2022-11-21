import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RedoCanvas, UndoCanvas, UpdateCanvas } from '../Store/canvas.actions';

@Injectable({
    providedIn: 'root',
})
export class NgrxServiceService {
    canvas!: fabric.Canvas;
    constructor(protected store: Store<{ canvasStore: '' }>) {}

    updateCanvasState(eventName: string) {
        this.store.dispatch(new UpdateCanvas({ canvasState: JSON.stringify(this.canvas), canvasActionType: eventName, CanvasBool: false }));
    }

    undoCanvasState() {
        this.store.dispatch(new UndoCanvas());
    }

    redoCanvasState() {
        this.store.dispatch(new RedoCanvas());
    }
}
