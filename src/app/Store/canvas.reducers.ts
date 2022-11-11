import { State, initialState } from './canvas.state';
import { ActionTypes } from './canvas.actions';
import { CanvasActions } from './canvas.actions';

export function canvasReducer(state = initialState, action: CanvasActions): State {
    switch (action.type) {
        case ActionTypes.UpdateCanvas:
            return {
                ...state,
                canvasArray: state.canvasArray.concat({
                    canvas: action.payload,
                }),
            };
        default:
            return state;
    }
}
