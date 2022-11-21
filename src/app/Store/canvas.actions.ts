import { Action } from '@ngrx/store';
import { State } from './canvas.state';

export enum ActionTypes {
    UpdateCanvas = '[Canvas Component] Update_Canvas',
    UndoCanvas = '[Canvas Component] Undo_Canvas',
    UndoRedoCanvasBoolean = '[Canvas Component] Undo_Canvas_Bool',
    RedoCanvas = '[Canvas Component] Redo_Canvas',
}

export class UpdateCanvas implements Action {
    public readonly type = ActionTypes.UpdateCanvas;
    constructor(public payload: State) {}
}

export class UndoCanvas implements Action {
    public readonly type = ActionTypes.UndoCanvas;
    constructor() {}
}

export class UndoRedoCanvasBoolean implements Action {
    public readonly type = ActionTypes.UndoRedoCanvasBoolean;
    constructor(public payload: State) {}
}

export class RedoCanvas implements Action {
    public readonly type = ActionTypes.RedoCanvas;
    constructor() {}
}

export type CanvasActions = UpdateCanvas | UndoCanvas | RedoCanvas | UndoRedoCanvasBoolean;
