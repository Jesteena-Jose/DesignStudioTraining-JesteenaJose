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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObjectsPaletteComponent,
    CanvasComponent,
    PropertiesComponent,
    EventInspectorComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
   
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
