import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number): string {
    let hours: number | string = Math.floor(duration / 60);
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes: number | string = duration % 60;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes} ${hours < 2 ? "hour" : "hours"}`
  }

}
