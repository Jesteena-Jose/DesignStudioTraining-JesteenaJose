import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { fabric } from 'fabric';

@Injectable({
    providedIn: 'root',
})
export class PropertyServiceService {
    canvas!: fabric.Canvas;
    public subject = new BehaviorSubject<Array<string>>([]);
    public message = new BehaviorSubject<string>('No object Selected');
    properties: any = [];
    flag = 1;
    constructor() {}

    getProperties() {
        this.canvas.on('selection:created', (options) => {
            if (options.target) {
                if (options.target.type == 'activeSelection') {
                    this.flag = 1;
                    this.subject.next([]);
                    this.message.next('Multiple objects selected. No properties available for multiple objects.');
                } else {
                    this.flag = 0;
                }
            }
        });

        this.canvas.on('selection:cleared', (options) => {
            this.subject.next([]);
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
                    this.subject.next(this.properties);
                }
            }
        });
        this.canvas.on('object:modified', (options) => {
            if (options.target) {
                if (this.flag == 0) {
                    this.properties[3] = options.target.get('angle');
                    this.subject.next(this.properties);
                }
            }
        });
    }

    getPropertyValues(): Observable<Array<string>> {
        return this.subject.asObservable();
    }

    getMessage(): Observable<string> {
        return this.message.asObservable();
    }

    setProperties(properties: Array<string>) {
        if (this.flag == 0) {
            this.canvas
                .getActiveObject()
                .set({ strokeWidth: parseInt(properties[0]), stroke: properties[1], fill: properties[2], angle: parseInt(properties[3]) });
            this.canvas.renderAll();
        }
    }
}
