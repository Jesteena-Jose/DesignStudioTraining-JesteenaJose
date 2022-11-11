import { fabric } from 'fabric';

export interface Canvas {
    canvas: string;
}

export interface State {
    canvasArray: Canvas[];
}

export const initialState: State = {
    canvasArray: [{ canvas: JSON.stringify(new fabric.Canvas('canvas')) }],
};
