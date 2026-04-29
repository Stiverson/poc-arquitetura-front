import { describe, it, expect } from 'vitest';
import { isSymmetricalSignal } from './stringValidator';

describe('stringValidator - UFO Symmetrical Signal', () => {
  it('deve retornar true para uma string perfeitamente simétrica', () => {
    expect(isSymmetricalSignal("anna")).toBe(true);
  });

  it('deve ignorar pontuações no final', () => {
    expect(isSymmetricalSignal("anna!")).toBe(true);
  });

  it('deve ignorar espaços em branco', () => {
    expect(isSymmetricalSignal("race car")).toBe(true);
  });

  it('deve retornar false se não for simétrico (ex: contiver um número solto)', () => {
    expect(isSymmetricalSignal("race car1")).toBe(false);
  });

  it('deve ignorar letras maiúsculas e minúsculas', () => {
    expect(isSymmetricalSignal("Race car")).toBe(true);
  });

  it('deve limpar frases complexas com espaços e vírgulas', () => {
    expect(isSymmetricalSignal("A man, a plan, a canal, Panama!")).toBe(true);
  });

  it('deve processar números como strings corretamente', () => {
    expect(isSymmetricalSignal("6dbTbd6")).toBe(true);
    expect(isSymmetricalSignal("axDbTbd6")).toBe(false);
  });

  it('deve retornar false para frases normais', () => {
    expect(isSymmetricalSignal("Hello, World!")).toBe(false);
  });
});