export interface Activity {
  start: string;
  end: string;
  name: string;
}

export class RoutineScheduler {
  // 1. Declarar a propriedade  fora do construtor
  private schedule: Activity[];

  // 2. O construtor apenas recebe o valor
  constructor(schedule: Activity[]) {
    // 3. E faço a atribuição clássica
    this.schedule = schedule;
  }

  whatShouldIDoNow(currentTime: Date): string {
    const currentHour = currentTime.getHours().toString().padStart(2, '0');
    const currentMinute = currentTime.getMinutes().toString().padStart(2, '0');
    
    const timeString = `${currentHour}:${currentMinute}`;

    const currentActivity = this.schedule.find(
      (activity) => timeString >= activity.start && timeString <= activity.end
    );

    return currentActivity ? currentActivity.name : "No activity";
  }
}