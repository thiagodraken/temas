import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LutadorDetalheComponent } from './lutador-detalhe.component';

describe('LutadorDetalheComponent', () => {
  let component: LutadorDetalheComponent;
  let fixture: ComponentFixture<LutadorDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LutadorDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LutadorDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
