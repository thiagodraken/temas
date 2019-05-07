import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaAleatoriaComponent } from './pesquisa-aleatoria.component';

describe('PesquisaAleatoriaComponent', () => {
  let component: PesquisaAleatoriaComponent;
  let fixture: ComponentFixture<PesquisaAleatoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaAleatoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaAleatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
