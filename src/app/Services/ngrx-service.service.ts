import { Injectable } from '@angular/core';
import { UpdateCanvas } from '../Store/canvas.actions';
import { Store, select } from '@ngrx/store';
import { State } from '../Store/canvas.state';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NgrxServiceService {
    state$: Observable<State>;

    constructor(private canvasStore: Store<{ State: any }>) {
        this.state$ = this.canvasStore.pipe(select('State'));
    }

    UpdateCanvas(newCanvas: string) {
        this.canvasStore.dispatch(new UpdateCanvas(newCanvas));
    }
}
