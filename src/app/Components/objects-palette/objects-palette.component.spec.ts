import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CanvasServiceService } from 'src/app/Services/canvas-service.service';
import { EventServiceService } from 'src/app/Services/event-service.service';
import { ObjectsPaletteComponent } from './objects-palette.component';
import { fabric } from 'fabric';

describe('ObjectsPaletteComponent', () => {
    let component: ObjectsPaletteComponent;
    let fixture: ComponentFixture<ObjectsPaletteComponent>;
    let canvasservice: CanvasServiceService;
    let eventservice: EventServiceService;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ObjectsPaletteComponent],
            providers: [provideMockStore({})],
        }).compileComponents();
        canvasservice = TestBed.inject(CanvasServiceService);
        eventservice = TestBed.inject(EventServiceService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ObjectsPaletteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    describe('draw shapes', () => {
        it('should create a rectangle in canvas', () => {
            const funcSpy = spyOn(canvasservice, 'drawRectangle').and.callThrough();
            let button = fixture.debugElement.nativeElement.querySelector('#rectangle');
            button.click();
            expect(funcSpy).toHaveBeenCalled();
        });
        it('should create a triangle in canvas', () => {
            const funcSpy = spyOn(canvasservice, 'drawTriangle').and.callThrough();
            let button = fixture.debugElement.nativeElement.querySelector('#triangle');
            button.click();
            expect(funcSpy).toHaveBeenCalled();
        });
        it('should create a circle in canvas', () => {
            const funcSpy = spyOn(canvasservice, 'drawCircle').and.callThrough();
            let button = fixture.debugElement.nativeElement.querySelector('#circle');
            button.click();
            expect(funcSpy).toHaveBeenCalled();
        });
    });
    describe('eventHandler() method', () => {
        it('should call event scaling when object is scaled', () => {
            const funcSpy = spyOn(eventservice, 'eventHandler');
            let rectangle = new fabric.Rect({
                left: 100,
                top: 100,
                fill: '#ff0000',
                width: 60,
                height: 30,
                stroke: '#000000',
            });
            component.canvas.add(rectangle);
            component.canvas.setActiveObject(rectangle);
            let modEvent = {
                action: 'scale',
                target: component.canvas.getActiveObject(),
            };
            component.canvas.fire('object:scaling', modEvent);
            component.ngOnInit();
            expect(funcSpy).toHaveBeenCalled();
        });
        it('should call event rotate when object is rotated', () => {
            const funcSpy = spyOn(eventservice, 'eventHandler');
            let rectangle = new fabric.Rect({
                left: 100,
                top: 100,
                fill: '#ff0000',
                width: 60,
                height: 30,
                stroke: '#000000',
            });
            component.canvas.add(rectangle);
            component.canvas.setActiveObject(rectangle);
            let modEvent = {
                action: 'rotate',
                target: component.canvas.getActiveObject(),
            };
            component.canvas.fire('object:rotating', modEvent);
            component.ngOnInit();
            expect(funcSpy).toHaveBeenCalled();
        });
        it('should call event moving when object is moved', () => {
            const funcSpy = spyOn(eventservice, 'eventHandler');
            let rectangle = new fabric.Rect({
                left: 100,
                top: 100,
                fill: '#ff0000',
                width: 60,
                height: 30,
                stroke: '#000000',
            });
            component.canvas.add(rectangle);
            component.canvas.setActiveObject(rectangle);
            let modEvent = {
                action: 'moving',
                target: component.canvas.getActiveObject(),
            };
            component.canvas.fire('object:moving', modEvent);
            component.ngOnInit();
            expect(funcSpy).toHaveBeenCalled();
        });
        it('should call event selectionCreated with activeSelection value when multiple objects are selected', () => {
            const funcSpy = spyOn(eventservice, 'eventHandler');
            let rectangle1 = new fabric.Rect({
                left: 100,
                top: 100,
                fill: '#ff0000',
                width: 60,
                height: 30,
                stroke: '#000000',
            });
            let rectangle2 = new fabric.Rect({
                left: 300,
                top: 200,
                fill: '#ff0000',
                width: 50,
                height: 30,
                stroke: '#000000',
            });
            component.canvas.add(rectangle1, rectangle2);
            var selection = new fabric.ActiveSelection([rectangle1, rectangle2], {
                canvas: component.canvas,
            });
            component.canvas.setActiveObject(selection);
            let modEvent = {
                action: 'create',
                target: component.canvas.getActiveObject(),
            };
            component.canvas.fire('selection:created', modEvent);
            component.ngOnInit();
            expect(funcSpy).toHaveBeenCalled();
        });
        it('should call event selectionCleared when no objects are selected', () => {
            const funcSpy = spyOn(eventservice, 'eventHandler');
            component.canvas.fire('selection:cleared');
            component.ngOnInit();
            expect(funcSpy).toHaveBeenCalled();
        });
        it('should call event mouseDown when object is clicked', () => {
            const funcSpy = spyOn(eventservice, 'eventHandler');
            let rectangle = new fabric.Rect({
                left: 100,
                top: 100,
                fill: '#ff0000',
                width: 60,
                height: 30,
                stroke: '#000000',
            });
            component.canvas.add(rectangle);
            component.canvas.setActiveObject(rectangle);
            let modEvent = {
                action: 'click',
                target: component.canvas.getActiveObject(),
            };
            component.canvas.fire('mouse:down', modEvent);
            component.ngOnInit();
            expect(funcSpy).toHaveBeenCalled();
        });
        it('should call event objectModified when object is modified', () => {
            const funcSpy = spyOn(eventservice, 'eventHandler');
            let rectangle = new fabric.Rect({
                left: 100,
                top: 100,
                fill: '#ff0000',
                width: 60,
                height: 30,
                stroke: '#000000',
            });
            component.canvas.add(rectangle);
            component.canvas.setActiveObject(rectangle);
            let modEvent = {
                action: 'modified',
                target: component.canvas.getActiveObject(),
            };
            component.canvas.fire('object:modified', modEvent);
            component.ngOnInit();
            expect(funcSpy).toHaveBeenCalled();
        });
    });
});
