import { createReducer, on } from '@ngrx/store';
import { UpdateCanvas } from './canvas.actions';
import { initialState } from './canvas.state';

export const canvasReducer = createReducer(
    initialState,
    on(UpdateCanvas, (state, action) => {
        return {
            ...state,
            CanvasState: action.CanvasState,
            EventType: action.EventType,
        };
    })
);
