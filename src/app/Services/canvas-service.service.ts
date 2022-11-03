import { Injectable } from '@angular/core';
import { fabric } from 'fabric';

@Injectable({
  providedIn: 'root'
})
export class CanvasServiceService {

  canvas: any
  constructor() { }

  drawRectangle() {
    let rectangle = new fabric.Rect({
      left: 100 + Math.random() * this.canvas.width * 0.25,
      top: 100 + Math.random() * this.canvas.height * 0.25,
      fill: 'red',
      width: 60,
      height: 30
    });
    this.canvas.add(rectangle)
  }
  drawTriangle() {
    let triangle = new fabric.Triangle({
      width: 50,
      height: 70,
      fill: 'blue',
      left: 200 + Math.random() * this.canvas.width * 0.25,
      top: 400 + Math.random() * this.canvas.height * 0.25
    });
    this.canvas.add(triangle);
  }
  drawCircle() {
    let circle = new fabric.Circle({
      radius: 40,
      fill: 'green',
      left: 400 + Math.random() * this.canvas.width * 0.25,
      top: 10 + Math.random() * this.canvas.height * 0.25
    });
    this.canvas.add(circle);
  }

}
