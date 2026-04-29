export function isSymmetricalSignal(signal: string): boolean {
  // 1. Limpeza da String
  const cleanedSignal = signal
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  // 2. Inversão da String
  const reversedSignal = cleanedSignal
    .split('')
    .reverse()
    .join('');

  // 3. Validação
  return cleanedSignal === reversedSignal;
}