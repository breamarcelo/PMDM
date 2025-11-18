import { TestBed } from '@angular/core/testing';

import { AlargadorDeFrases } from './alargador-de-frases';

describe('AlargadorDeFrases', () => {
  let service: AlargadorDeFrases;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlargadorDeFrases);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
