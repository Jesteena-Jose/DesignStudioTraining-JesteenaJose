import { State, initialState } from './canvas.state';
import { ActionTypes, CanvasActions } from './canvas.actions';

export function canvasReducer(state = initialState, action: CanvasActions): State {
    switch (action.type) {
        case ActionTypes.UpdateCanvas:
            return {
                ...state,
                canvasState: action.payload.canvasState,
                canvasActionType: action.payload.canvasActionType,
                CanvasBool: action.payload.CanvasBool,
            };
        case ActionTypes.UndoRedoCanvasBoolean:
            return {
                ...state,
                canvasState: action.payload.canvasState,
                canvasActionType: action.payload.canvasActionType,
                CanvasBool: action.payload.CanvasBool,
            };
        default:
            return state;
    }
}
