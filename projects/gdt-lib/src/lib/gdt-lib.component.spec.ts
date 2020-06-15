import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdtLibComponent } from './gdt-lib.component';

describe('GdtLibComponent', () => {
  let component: GdtLibComponent;
  let fixture: ComponentFixture<GdtLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdtLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdtLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
