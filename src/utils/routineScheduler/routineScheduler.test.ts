import { describe, it, expect } from 'vitest';
import { RoutineScheduler, type Activity } from './routineScheduler';

describe('RoutineScheduler', () => {
  // configuração flexível (Iteração 2 resolvida aqui)
  const mySchedule: Activity[] = [
    { start: "06:00", end: "06:44", name: "Do exercise" },
    { start: "06:45", end: "06:59", name: "Take a shower" },
    { start: "07:00", end: "07:29", name: "Read" },
    { start: "08:00", end: "09:00", name: "Have breakfast" }
  ];

  const scheduler = new RoutineScheduler(mySchedule);

  // Função auxiliar para "trolar" a hora no teste
  const createFakeTime = (hours: number, minutes: number): Date => {
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  it('deve retornar "Do exercise" às 06:15', () => {
    const fakeTime = createFakeTime(6, 15);
    expect(scheduler.whatShouldIDoNow(fakeTime)).toBe("Do exercise");
  });

  it('deve retornar "Take a shower" às 06:50 (Precisão de minutos)', () => {
    const fakeTime = createFakeTime(6, 50);
    expect(scheduler.whatShouldIDoNow(fakeTime)).toBe("Take a shower");
  });

  it('deve retornar "Have breakfast" na exata virada da hora (08:00)', () => {
    const fakeTime = createFakeTime(8, 0);
    expect(scheduler.whatShouldIDoNow(fakeTime)).toBe("Have breakfast");
  });

  it('deve retornar "No activity" se estiver fora de qualquer escopo (ex: 10:00)', () => {
    const fakeTime = createFakeTime(10, 0);
    expect(scheduler.whatShouldIDoNow(fakeTime)).toBe("No activity");
  });
});