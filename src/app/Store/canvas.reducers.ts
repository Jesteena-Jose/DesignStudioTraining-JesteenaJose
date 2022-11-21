import { State, initialState } from './canvas.state';
import { ActionTypes, CanvasActions } from './canvas.actions';

export function canvasReducer(state = initialState, action: CanvasActions): State {
    if (action.type === ActionTypes.UpdateCanvas || action.type === ActionTypes.UndoRedoCanvasBoolean) {
        return {
            ...state,
            canvasState: action.payload.canvasState,
            canvasActionType: action.payload.canvasActionType,
            CanvasBool: action.payload.CanvasBool,
        };
    }
    return state;
}
