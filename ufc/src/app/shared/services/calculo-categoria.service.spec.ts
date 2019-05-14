import { TestBed } from '@angular/core/testing';

import { CalculoCategoriaService } from './calculo-categoria.service';

describe('CalculoCategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculoCategoriaService = TestBed.get(CalculoCategoriaService);
    expect(service).toBeTruthy();
  });
});
