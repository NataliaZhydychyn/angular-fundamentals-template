import { Pipe } from "@angular/core";

@Pipe({
    name: 'duration'
})
export class DurationPipe {
    transform(value: number): string {
        const hours: number = Math.floor(value / 60);
        const minutes: number = value % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
}