import { describe, it, expect } from 'vitest';
import { formatNumber } from './numberFormatter';

describe('formatNumber', () => {
  it('deve retornar "1" quando receber o número 1', () => {
    // Ação e Afirmação (Assert)
    expect(formatNumber(1)).toBe("1");
  });
});

it('deve retornar "2" quando receber o número 2', () => {
    expect(formatNumber(2)).toBe("2");
  });