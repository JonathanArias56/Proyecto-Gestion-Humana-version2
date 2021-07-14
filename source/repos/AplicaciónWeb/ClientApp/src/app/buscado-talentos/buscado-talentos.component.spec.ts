import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadoTalentosComponent } from './buscado-talentos.component';

describe('BuscadoTalentosComponent', () => {
  let component: BuscadoTalentosComponent;
  let fixture: ComponentFixture<BuscadoTalentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadoTalentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadoTalentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
