import { Component, OnInit } from '@angular/core';
import { NgrxServiceService } from 'src/app/Services/ngrx-service.service';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit {
    constructor(private ngrxService: NgrxServiceService) {}

    ngOnInit(): void {
        this.ngrxService.getUpdate();
    }
}
