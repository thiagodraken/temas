import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LutadorEditarComponent } from './lutador-editar.component';

describe('LutadorEditarComponent', () => {
  let component: LutadorEditarComponent;
  let fixture: ComponentFixture<LutadorEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LutadorEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LutadorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
