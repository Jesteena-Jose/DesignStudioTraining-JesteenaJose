import { Component, OnInit } from '@angular/core';
import { NgrxServiceService } from 'src/app/Services/ngrx-service.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
    constructor(private ngrxservice: NgrxServiceService) {}

    ngOnInit(): void {}

    handleundo() {
        this.ngrxservice.undoCanvasState();
    }
}
