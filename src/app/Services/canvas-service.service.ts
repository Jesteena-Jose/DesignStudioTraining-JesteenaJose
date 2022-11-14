import { Injectable } from '@angular/core';
import { fabric } from 'fabric';

@Injectable({
    providedIn: 'root',
})
export class CanvasServiceService {
    canvas!: fabric.Canvas;
    constructor() {}

    drawRectangle() {
        let rectangle = new fabric.Rect({
            left: 100 + Math.random() * (this.canvas.width as number) * 0.25,
            top: 100 + Math.random() * (this.canvas.height as number) * 0.25,
            fill: '#ff0000',
            width: 60,
            height: 30,
            stroke: '#000000',
        });
        this.canvas.add(rectangle);
    }
    drawTriangle() {
        let triangle = new fabric.Triangle({
            width: 50,
            height: 70,
            fill: '#00ff00',
            left: 200 + Math.random() * (this.canvas.width as number) * 0.25,
            top: 400 + Math.random() * (this.canvas.height as number) * 0.25,
            stroke: '#000000',
        });
        this.canvas.add(triangle);
    }
    drawCircle() {
        let circle = new fabric.Circle({
            radius: 40,
            fill: '#0000ff',
            left: 400 + Math.random() * (this.canvas.width as number) * 0.25,
            top: 10 + Math.random() * (this.canvas.height as number) * 0.25,
            stroke: '#000000',
        });
        this.canvas.add(circle);
    }
}
