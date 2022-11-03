import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/Services/event-service.service';

@Component({
  selector: 'app-event-inspector',
  templateUrl: './event-inspector.component.html',
  styleUrls: ['./event-inspector.component.css']
})
export class EventInspectorComponent implements OnInit {

  eventMessage: any;
  constructor(private eventservice: EventServiceService) {
    this.eventservice.eventMessage().subscribe((data) => {
      this.eventMessage = data
    })
  }

  ngOnInit(): void {
  }
}
