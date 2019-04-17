import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LutadorNovoComponent } from './lutador-novo.component';

describe('LutadorNovoComponent', () => {
  let component: LutadorNovoComponent;
  let fixture: ComponentFixture<LutadorNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LutadorNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LutadorNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
