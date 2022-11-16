import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/Services/event-service.service';

@Component({
    selector: 'app-properties',
    templateUrl: './properties.component.html',
    styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
    properties: any = [];
    message: string = '';
    constructor(private eventService: EventServiceService) {
        this.eventService.getPropertyValues().subscribe((data) => {
            this.properties = data;
        });
        this.eventService.getMessage().subscribe((data) => {
            this.message = data;
        });
    }

    ngOnInit(): void {}
    handleChange(property: string, propertyValue: string) {
        this.eventService.setProperties(property, propertyValue);
    }
}
