import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  shapes:any
  canvas:any
  public subject=new BehaviorSubject<string>("");
  constructor() { }

  eventHandler(){
    this.shapes = { 'rect': 'Rectangle', 'triangle': 'Triangle', 'circle': 'Circle' }
    // object add
    this.canvas.on('object:added', (options: any) => {
      if (options.target) {
        this.subject.next(this.shapes[options.target.type]+ ' was added')
      }
    });
    //object translate
    this.canvas.on('object:moving', (options: any) => {
      if (options.target) {
        this.subject.next(this.shapes[options.target.type]+ ' was translated')
      }
    });
    //object scale
    this.canvas.on('object:scaling', (options: any) => {
      if (options.target) {
        this.subject.next(this.shapes[options.target.type]+ ' was scaled')
      }
    });
    //object rotate
    this.canvas.on('object:rotating', (options: any) => {
      if (options.target) {
        this.subject.next(this.shapes[options.target.type]+ ' was rotated')
      }
    });
  }

  eventMessage():Observable<string>{
    return this.subject.asObservable();
  }
}
