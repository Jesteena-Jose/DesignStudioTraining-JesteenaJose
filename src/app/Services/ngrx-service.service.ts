import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UpdateCanvas } from '../Store/canvas.actions';

@Injectable({
    providedIn: 'root',
})
export class NgrxServiceService {
    canvas!: fabric.Canvas;
    constructor(protected store: Store<{ canvasStore: '' }>) {}

    updateCanvasState(eventName: string) {
        this.store.dispatch(
            UpdateCanvas({
                CanvasState: JSON.stringify(this.canvas),
                EventType: eventName,
            })
        );
    }
}
