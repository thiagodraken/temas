import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaCategoriaComponent } from './verifica-categoria.component';

describe('VerificaCategoriaComponent', () => {
  let component: VerificaCategoriaComponent;
  let fixture: ComponentFixture<VerificaCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificaCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
