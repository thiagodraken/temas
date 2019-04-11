import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LutadoresComponent } from './lutadores.component';

describe('LutadoresComponent', () => {
  let component: LutadoresComponent;
  let fixture: ComponentFixture<LutadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LutadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LutadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
