import { Action } from '@ngrx/store';

export enum ActionTypes {
    UpdateCanvas = '[Canvas Component] Update_Canvas',
}

export class UpdateCanvas implements Action {
    public readonly type = ActionTypes.UpdateCanvas;
    constructor(public payload: string) {}
}

export type CanvasActions = UpdateCanvas;
