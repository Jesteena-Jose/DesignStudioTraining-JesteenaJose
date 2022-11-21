import { ActionReducer, MetaReducer } from '@ngrx/store';
import { UndoRedoServiceService } from '../Services/undo-redo-service.service';
import { CanvasActions, ActionTypes, UndoRedoCanvasBoolean } from './canvas.actions';
import { AppState } from '.';

export function undoRedoMetaReducer(undoRedoService: UndoRedoServiceService): MetaReducer<AppState, CanvasActions> {
    function undoRedo(reducer: ActionReducer<AppState, CanvasActions>): ActionReducer<AppState, CanvasActions> {
        return (state, action: CanvasActions) => {
            let modifiedAction = action;
            let modifiedState;
            switch (action.type) {
                case ActionTypes.UpdateCanvas:
                    undoRedoService.addState(state?.CanvasList.canvasState);
                    break;
                case ActionTypes.UndoCanvas:
                    modifiedState = undoRedoService.undoOperation(state?.CanvasList.canvasState) as string;
                    modifiedAction = new UndoRedoCanvasBoolean({
                        canvasState: modifiedState,
                        canvasActionType: 'UndoRedoCanvasBoolean',
                        CanvasBool: true,
                    });
                    break;
                case ActionTypes.RedoCanvas:
                    modifiedState = undoRedoService.redoOperation(state?.CanvasList.canvasState) as string;
                    modifiedAction = new UndoRedoCanvasBoolean({
                        canvasState: modifiedState,
                        canvasActionType: 'UndoRedoCanvasBoolean',
                        CanvasBool: true,
                    });
                    break;
            }
            return reducer(state, modifiedAction);
        };
    }
    return undoRedo;
}
