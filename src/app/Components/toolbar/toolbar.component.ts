import { Component, OnInit } from '@angular/core';
import { NgrxServiceService } from 'src/app/Services/ngrx-service.service';
import { UndoRedoServiceService } from 'src/app/Services/undo-redo-service.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
    undoEnable: boolean = false;
    redoEnable: boolean = false;
    constructor(private ngrxservice: NgrxServiceService, private undoredoservice: UndoRedoServiceService) {
        this.undoredoservice.undoEnabled().subscribe((data) => {
            this.undoEnable = data;
        });
        this.undoredoservice.redoEnabled().subscribe((data) => {
            this.redoEnable = data;
        });
    }

    ngOnInit(): void {}

    handleundo() {
        this.ngrxservice.undoCanvasState();
    }

    handleredo() {
        this.ngrxservice.redoCanvasState();
    }
}
