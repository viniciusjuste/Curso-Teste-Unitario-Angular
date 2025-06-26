import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService],
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('Deve fazer a operação corretamente entre dois números', () => {
    expect(service).toBeTruthy();

    expect(service.calcular(2, 3, 'soma')).toBe(5);
    expect(service.calcular(5, 3, 'subtracao')).toBe(2);
    expect(service.calcular(2, 3, 'multiplicacao')).toBe(6);
    expect(service.calcular(6, 3, 'divisao')).toBe(2);
    expect(service.calcular(6, 0, 'divisao')).toBeNaN();
  });
});
