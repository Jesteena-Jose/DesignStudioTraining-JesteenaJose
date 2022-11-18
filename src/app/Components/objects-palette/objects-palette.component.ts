import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { CanvasServiceService } from 'src/app/Services/canvas-service.service';
import { EventServiceService } from 'src/app/Services/event-service.service';
import { NgrxServiceService } from 'src/app/Services/ngrx-service.service';
import { select, Store } from '@ngrx/store';
import { getCanvas, undoCanvas } from 'src/app/Store/canvas.selector';

@Component({
    selector: 'app-objects-palette',
    templateUrl: './objects-palette.component.html',
    styleUrls: ['./objects-palette.component.css'],
})
export class ObjectsPaletteComponent implements OnInit {
    canvas!: fabric.Canvas;
    canvasedit: any;
    canvasedit$ = this.store.pipe(select(getCanvas));
    canvasundo: any;
    canvasundo$ = this.store.pipe(select(undoCanvas));

    constructor(
        private canvasservice: CanvasServiceService,
        private eventservice: EventServiceService,
        private ngrxService: NgrxServiceService,
        private store: Store
    ) {
        this.canvasedit$.subscribe((data) => {
            this.canvasedit = data;
        });
        this.canvasundo$.subscribe((data) => {
            this.canvasundo = data;
            console.log(data);
            if (data != null) {
                this.canvas.loadFromJSON(this.canvasundo, () => {});
            }
        });
    }

    ngOnInit(): void {
        this.canvas = new fabric.Canvas('canvas');
        this.canvasservice.canvas = this.canvas;
        this.eventservice.canvas = this.canvas;
        this.ngrxService.canvas = this.canvas;
        this.eventservice.eventHandler();
    }

    drawRectangle() {
        this.canvasservice.drawRectangle();
    }
    drawTriangle() {
        this.canvasservice.drawTriangle();
    }
    drawCircle() {
        this.canvasservice.drawCircle();
    }
}
