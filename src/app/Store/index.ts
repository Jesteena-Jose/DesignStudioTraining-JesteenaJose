import { State } from './canvas.state';
import { canvasReducer } from './canvas.reducers';
import { ActionReducerMap } from '@ngrx/store';

export const rootReducer = {};

export interface AppState {
    CanvasList: State;
}

export const reducers: ActionReducerMap<AppState, any> = {
    CanvasList: canvasReducer,
};
