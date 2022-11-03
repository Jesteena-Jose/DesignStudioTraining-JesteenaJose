import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { CanvasServiceService } from 'src/app/Services/canvas-service.service';
import { EventServiceService } from 'src/app/Services/event-service.service';

@Component({
  selector: 'app-objects-palette',
  templateUrl: './objects-palette.component.html',
  styleUrls: ['./objects-palette.component.css']
})
export class ObjectsPaletteComponent implements OnInit {

  canvas: any
  shapes: any
  constructor(private canvasservice: CanvasServiceService, private eventservice: EventServiceService) { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas');
    this.canvasservice.canvas = this.canvas;
    this.eventservice.canvas = this.canvas;
    this.eventservice.eventHandler()
  }

  drawRectangle() {
    this.canvasservice.drawRectangle()
  }
  drawTriangle() {
    this.canvasservice.drawTriangle()
  }
  drawCircle() {
    this.canvasservice.drawCircle()
  }

}
