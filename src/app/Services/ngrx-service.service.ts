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

    getUpdate() {
        let shapes = { rect: 'Rectangle', triangle: 'Triangle', circle: 'Circle' };
        this.canvas.on('object:modified', (options) => {
            if (options.target) {
                var eventString = 'Modified ' + shapes[options.target.type as keyof typeof shapes];
                this.updateCanvasState(eventString);
            }
        });
        this.canvas.on('object:added', (options) => {
            if (options.target) {
                var eventString = 'Added ' + shapes[options.target.type as keyof typeof shapes];
                this.updateCanvasState(eventString);
            }
        });
    }
}
