import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionContratacionComponent } from './seleccion-contratacion.component';

describe('SeleccionContratacionComponent', () => {
  let component: SeleccionContratacionComponent;
  let fixture: ComponentFixture<SeleccionContratacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionContratacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionContratacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
