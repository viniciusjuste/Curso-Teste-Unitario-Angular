import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor(private logger: LoggerService) { }

  calcular(num1: number, num2: number, operacao: string): number | null {
    switch (operacao) {
      case 'soma':
        return num1 + num2;
      case 'subtracao':
        return num1 - num2;
      case 'multiplicacao':
        return num1 * num2;
      case 'divisao':
        return num2 !== 0 ? num1 / num2 : NaN;
      default:
        this.logger.log(`Operação inválida: ${operacao}`);
        return null;
    }
  }
}
