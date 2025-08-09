
import { potencia, numeroTriangular } from './math.js';

test('Calcula potencia(2, 3) correctamente', () => {
    expect(potencia(2, 3)).toBe(8);
});

test('Calcula potencia(5, 0) como 1', () => {
    expect(potencia(5, 0)).toBe(1);
});

test('Lanza error si el exponente es negativo', () => {
    expect(() => potencia(2, -2)).toThrow('El exponente debe ser positivo');
});

test('Calcula numeroTriangular(4) correctamente', () => {
    expect(numeroTriangular(4)).toBe(10); // 1+2+3+4
});

test('numeroTriangular(0) devuelve 0', () => {
    expect(numeroTriangular(0)).toBe(0);
});
