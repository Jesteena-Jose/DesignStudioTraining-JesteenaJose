import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsPaletteComponent } from './objects-palette.component';

describe('ObjectsPaletteComponent', () => {
  let component: ObjectsPaletteComponent;
  let fixture: ComponentFixture<ObjectsPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectsPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
