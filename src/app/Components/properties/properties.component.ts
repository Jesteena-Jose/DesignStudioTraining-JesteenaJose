import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from 'src/app/Services/property-service.service';

@Component({
    selector: 'app-properties',
    templateUrl: './properties.component.html',
    styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
    properties: any = [];
    message: string = '';
    constructor(private propertyService: PropertyServiceService) {
        this.propertyService.getPropertyValues().subscribe((data) => {
            this.properties = data;
        });
        this.propertyService.getMessage().subscribe((data) => {
            this.message = data;
        });
    }

    ngOnInit(): void {
        this.propertyService.getProperties();
    }
    handleClick() {
        this.propertyService.setProperties(this.properties);
    }
}
