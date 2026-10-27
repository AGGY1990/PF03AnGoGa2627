import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/esPinValido.js';

describe('Función esPinValido', () => {
    it('debe devolver false cuando el PIN es null', () => {
        expect(esPinValido(null)).toBe(false);
    });

    it('debe devolver false cuando el PIN es undefined', () => {
        expect(esPinValido(undefined)).toBe(false);
    });

    it('debe devolver false cuando el PIN está vacío', () => {
        expect(esPinValido('')).toBe(false);
    });

    it('debe devolver true cuando el PIN tiene 4 dígitos diferentes', () => {
        expect(esPinValido('1234')).toBe(true);
    });

    it('debe devolver true cuando el PIN tiene 6 dígitos diferentes', () => {
        expect(esPinValido('123456')).toBe(true);
    });

    it('debe devolver false cuando el PIN tiene una longitud distinta de 4 o 6', () => {
        expect(esPinValido('123')).toBe(false);
        expect(esPinValido('12345')).toBe(false);
        expect(esPinValido('1234567')).toBe(false);
    });

    it('debe devolver false cuando el PIN contiene letras', () => {
        expect(esPinValido('12a4')).toBe(false);
    });

    it('debe devolver false cuando el PIN contiene símbolos', () => {
        expect(esPinValido('12-4')).toBe(false);
    });

    it('debe devolver false cuando todos los dígitos son iguales', () => {
        expect(esPinValido('1111')).toBe(false);
        expect(esPinValido('888888')).toBe(false);
        expect(esPinValido('33333')).toBe(false);
    });

    it('debe devolver false cuando el PIN no es una cadena', () => {
        expect(esPinValido(1234)).toBe(false);
    });
});
