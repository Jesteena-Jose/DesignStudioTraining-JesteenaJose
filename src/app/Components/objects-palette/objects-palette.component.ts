import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-objects-palette',
  templateUrl: './objects-palette.component.html',
  styleUrls: ['./objects-palette.component.css']
})
export class ObjectsPaletteComponent implements OnInit {

  canvas:any
  constructor() { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas');
  }

  drawRectangle() {
    var rect = new fabric.Rect({
      left:Math.random() * this.canvas.width,
      top: Math.random() * this.canvas.height,
      fill: 'red',
      width: 60,
      height: 30
    });
    this.canvas.add(rect)
  }
  drawTriangle() {
    var triangle = new fabric.Triangle({
      width: 50,
      height: 70,
      fill: 'blue',
      left: Math.random() * this.canvas.width,
      top: Math.random() * this.canvas.height
    });
    this.canvas.add(triangle);
  }
  drawCircle() {
    var circle = new fabric.Circle({
      radius: 40,
      fill: 'green',
      left:Math.random() * this.canvas.width,
      top: Math.random() * this.canvas.height
    });
    this.canvas.add(circle);
  }

}
