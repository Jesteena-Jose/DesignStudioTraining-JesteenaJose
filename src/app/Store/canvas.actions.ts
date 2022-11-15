import { createAction, props } from '@ngrx/store';

export const UpdateCanvas = createAction(
    '[Canvas] Update Canvas',
    props<{
        CanvasState: string;
        EventType: string;
    }>()
);
