import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './Components/header/header.component';
import { ObjectsPaletteComponent } from './Components/objects-palette/objects-palette.component';
import { CanvasComponent } from './Components/canvas/canvas.component';
import { PropertiesComponent } from './Components/properties/properties.component';
import { EventInspectorComponent } from './Components/event-inspector/event-inspector.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { StoreModule, META_REDUCERS } from '@ngrx/store';
import { reducers } from './Store/index';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { undoRedoMetaReducer } from './Store/canvas.metareducer';
import { UndoRedoServiceService } from './Services/undo-redo-service.service';
import { CanvasServiceService } from './Services/canvas-service.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ObjectsPaletteComponent,
        CanvasComponent,
        PropertiesComponent,
        EventInspectorComponent,
        ToolbarComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 50,
        }),
    ],
    providers: [
        CanvasServiceService,
        {
            provide: META_REDUCERS,
            deps: [UndoRedoServiceService],
            useFactory: undoRedoMetaReducer,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
