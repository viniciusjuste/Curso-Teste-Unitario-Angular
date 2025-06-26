import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import { LoggerService } from './logger.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;
  let loggerSpy: any

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [CalculadoraService,
        { provide: LoggerService, useValue: loggerSpy }
      ],
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

  it('Operação não existe', () => {
    expect(service.calcular(2, 3, 'modulo')).toBeNull();
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
