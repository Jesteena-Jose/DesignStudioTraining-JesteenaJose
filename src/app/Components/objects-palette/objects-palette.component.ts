import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-objects-palette',
  templateUrl: './objects-palette.component.html',
  styleUrls: ['./objects-palette.component.css']
})
export class ObjectsPaletteComponent implements OnInit {

  canvas: any
  shapes: any
  constructor() { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas');
    let myEventInspector = <HTMLElement>document.querySelector("#event");
    this.shapes = { 'rect': 'Rectangle', 'triangle': 'Triangle', 'circle': 'Circle' }

    // object add
    this.canvas.on('object:added', (options: any) => {
      if (options.target) {
        myEventInspector.innerHTML = '<p>' + this.shapes[options.target.type] + ' was added' + '</p>';
      }
    });
    //object translate
    this.canvas.on('object:moving', (options: any) => {
      if (options.target) {
        myEventInspector.innerHTML = '<p>' + this.shapes[options.target.type] + ' was translated' + '</p>';
      }
    });
    //object scale
    this.canvas.on('object:scaling', (options: any) => {
      if (options.target) {
        myEventInspector.innerHTML = '<p>' + this.shapes[options.target.type] + ' was scaled' + '</p>';
      }
    });
    //object rotate
    this.canvas.on('object:rotating', (options: any) => {
      if (options.target) {
        myEventInspector.innerHTML = '<p>' + this.shapes[options.target.type] + ' was rotated' + '</p>';
      }
    });
  }

  drawRectangle() {
    var rectangle = new fabric.Rect({
      left: 100 + Math.random() * this.canvas.width * 0.25,
      top: 100 + Math.random() * this.canvas.height * 0.25,
      fill: 'red',
      width: 60,
      height: 30
    });
    this.canvas.add(rectangle)
  }
  drawTriangle() {
    var triangle = new fabric.Triangle({
      width: 50,
      height: 70,
      fill: 'blue',
      left: 200 + Math.random() * this.canvas.width * 0.25,
      top: 400 + Math.random() * this.canvas.height * 0.25
    });
    this.canvas.add(triangle);
  }
  drawCircle() {
    var circle = new fabric.Circle({
      radius: 40,
      fill: 'green',
      left: 400 + Math.random() * this.canvas.width * 0.25,
      top: 10 + Math.random() * this.canvas.height * 0.25
    });
    this.canvas.add(circle);
  }

}
