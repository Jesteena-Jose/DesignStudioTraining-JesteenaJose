import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgrxServiceService } from './ngrx-service.service';

@Injectable({
    providedIn: 'root',
})
export class EventServiceService {
    canvas!: fabric.Canvas;
    public propertysubject = new BehaviorSubject<Array<string>>([]);
    public message = new BehaviorSubject<string>('No object Selected');
    properties: any = [];
    flag = 1;
    public subject = new BehaviorSubject<string>('');

    constructor(private ngrxService: NgrxServiceService) {}

    eventHandler() {
        let shapes = { rect: 'Rectangle', triangle: 'Triangle', circle: 'Circle' };
        // object add
        this.canvas.on('object:added', (options: any) => {
            if (options.target) {
                this.subject.next(shapes[options.target.type as keyof typeof shapes] + ' was added');
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
        this.canvas.on('selection:created', (options) => {
            if (options.target) {
                if (options.target.type == 'activeSelection') {
                    this.flag = 1;
                    this.propertysubject.next([]);
                    this.message.next('Multiple objects selected. No properties available for multiple objects.');
                } else {
                    this.flag = 0;
                }
            }
        });

        this.canvas.on('selection:cleared', (options) => {
            this.propertysubject.next([]);
            this.flag = 1;
            this.message.next('No object Selected');
        });

        this.canvas.on('mouse:down', (options) => {
            if (options.target) {
                if (this.flag == 0) {
                    this.message.next('');
                    this.properties[0] = options.target.get('strokeWidth');
                    this.properties[1] = options.target.get('stroke');
                    this.properties[2] = options.target.get('fill');
                    this.properties[3] = options.target.get('angle');
                    this.propertysubject.next(this.properties);
                }
            }
        });
        this.canvas.on('object:modified', (options) => {
            if (options.target) {
                var eventString = 'Modified ' + shapes[options.target.type as keyof typeof shapes];
                this.ngrxService.updateCanvasState(eventString);
                if (this.flag == 0) {
                    this.properties[3] = options.target.get('angle');
                    this.propertysubject.next(this.properties);
                }
            }
        });
    }

    eventMessage(): Observable<string> {
        return this.subject.asObservable();
    }

    getPropertyValues(): Observable<Array<string>> {
        return this.propertysubject.asObservable();
    }

    getMessage(): Observable<string> {
        return this.message.asObservable();
    }

    setProperties(property: string, propertyValue: string) {
        if (this.flag == 0) {
            if (property == 'strokeWidth') {
                this.canvas.getActiveObject().set({ strokeWidth: parseInt(propertyValue) });
            } else if (property == 'stroke') {
                this.canvas.getActiveObject().set({ stroke: propertyValue });
            } else if (property == 'fill') {
                this.canvas.getActiveObject().set({ fill: propertyValue });
            } else if (property == 'angle') {
                this.canvas.getActiveObject().set({ angle: parseInt(propertyValue) });
            }
            this.canvas.renderAll();
            this.ngrxService.updateCanvasState('Modified Object');
        }
    }
}
