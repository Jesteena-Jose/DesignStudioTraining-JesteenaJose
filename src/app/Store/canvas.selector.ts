import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './canvas.state';

const canvasState = createFeatureSelector<State>('CanvasList');

export const getCanvas = createSelector(canvasState, (canvas: State) => {
    return canvas.canvasState;
});

export const undoCanvas = createSelector(canvasState, (canvas: State) => {
    if (canvas.CanvasBool) {
        return canvas.canvasState;
    } else {
        return null;
    }
});
