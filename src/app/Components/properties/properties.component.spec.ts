import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventServiceService } from 'src/app/Services/event-service.service';
import { PropertiesComponent } from './properties.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('PropertiesComponent', () => {
    let component: PropertiesComponent;
    let fixture: ComponentFixture<PropertiesComponent>;
    let eventservice: EventServiceService;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PropertiesComponent],
            providers: [provideMockStore({})],
        }).compileComponents();
        eventservice = TestBed.inject(EventServiceService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PropertiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should call the setProperties during handlechange', () => {
        const funcSpy = spyOn(eventservice, 'setProperties').and.callThrough();
        component.handleChange('angle', '60');
        expect(funcSpy).toHaveBeenCalledWith('angle', '60');
    });
});
