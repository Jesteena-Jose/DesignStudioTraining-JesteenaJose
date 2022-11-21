import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UndoRedoServiceService {
    undoStack: Array<string> = [];
    redoStack: Array<string> = [];
    public undoEnable = new BehaviorSubject<boolean>(false);
    public redoEnable = new BehaviorSubject<boolean>(false);

    constructor() {}

    addState(state: any) {
        this.undoStack.push(state);
        this.redoStack = [];
        this.undoEnable.next(true);
    }

    undoOperation(currentState: any) {
        if (this.undoStack.length == 1) {
            this.undoEnable.next(false);
        }
        this.redoEnable.next(true);
        this.redoStack.push(currentState);
        return this.undoStack.pop();
    }

    redoOperation(currentState: any) {
        if (this.redoStack.length == 1) {
            this.redoEnable.next(false);
        }
        this.undoEnable.next(true);
        this.undoStack.push(currentState);
        return this.redoStack.pop();
    }

    undoEnabled(): Observable<boolean> {
        return this.undoEnable.asObservable();
    }
    redoEnabled(): Observable<boolean> {
        return this.redoEnable.asObservable();
    }
}
