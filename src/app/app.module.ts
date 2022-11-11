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
import { StoreModule } from '@ngrx/store';
import { canvasReducer } from './Store/canvas.reducers';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
        StoreModule.forRoot(canvasReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
