import { fabric } from 'fabric';

export interface State {
    canvasState: string;
    canvasActionType: string;
    CanvasBool: boolean;
}

export const initialState: State = {
    canvasState: JSON.stringify(new fabric.Canvas('canvas')),
    canvasActionType: '',
    CanvasBool: false,
};
