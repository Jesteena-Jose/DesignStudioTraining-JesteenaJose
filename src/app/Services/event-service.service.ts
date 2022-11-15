import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgrxServiceService } from './ngrx-service.service';

@Injectable({
    providedIn: 'root',
})
export class EventServiceService {
    canvas!: fabric.Canvas;
    public subject = new BehaviorSubject<string>('');

    constructor(private ngrxService: NgrxServiceService) {}

    eventHandler() {
        let shapes = { rect: 'Rectangle', triangle: 'Triangle', circle: 'Circle' };
        // object add
        this.canvas.on('object:added', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' was added');
                var eventString = 'Added ' + shapes[options.target.type as keyof typeof shapes];
                this.ngrxService.updateCanvasState(eventString);
            }
        });
        //object translate
        this.canvas.on('object:moving', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' was translated');
            }
        });
        //object scale
        this.canvas.on('object:scaling', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' was scaled');
            }
        });
        //object rotate
        this.canvas.on('object:rotating', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' was rotated');
            }
        });
        this.canvas.on('object:modified', (options) => {
            if (options.target) {
                var eventString = 'Modified ' + shapes[options.target.type as keyof typeof shapes];
                this.ngrxService.updateCanvasState(eventString);
            }
        });

    }

    eventMessage(): Observable<string> {
        return this.subject.asObservable();
    }
}
