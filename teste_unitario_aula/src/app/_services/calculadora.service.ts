import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  calcular(num1 : number, num2: number, operacao: string): number {
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
        throw new Error('Operação inválida');
    }

  }
}
