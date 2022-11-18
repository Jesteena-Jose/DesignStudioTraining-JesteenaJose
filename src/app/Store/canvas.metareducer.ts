import { ActionReducer, MetaReducer } from '@ngrx/store';
import { UndoRedoServiceService } from '../Services/undo-redo-service.service';
import { State } from './canvas.state';
import { CanvasActions, ActionTypes, UndoCanvasBoolean } from './canvas.actions';

export function undoRedoMetaReducer(undoRedoService: UndoRedoServiceService): MetaReducer<State, CanvasActions> {
    function undoRedo(reducer: ActionReducer<State, CanvasActions>): ActionReducer<State, CanvasActions> {
        return (state, action: CanvasActions) => {
            let modifiedAction = action;
            let modifiedState;
            switch (action.type) {
                case ActionTypes.UpdateCanvas:
                    undoRedoService.addState(state);
                    break;
                case ActionTypes.UndoCanvas:
                    modifiedState = undoRedoService.undoOperation();
                    modifiedAction = new UndoCanvasBoolean({
                        canvasState: modifiedState,
                        canvasActionType: 'UndoCanvasBoolean',
                        CanvasBool: true,
                    });
                    break;
                case ActionTypes.RedoCanvas:
                    modifiedState = undoRedoService.redoOperation();
                    console.log(modifiedState);
                    break;
            }
            return reducer(state, modifiedAction);
        };
    }
    return undoRedo;
}
