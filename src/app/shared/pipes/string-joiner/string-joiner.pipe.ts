import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner'
})
export class StringJoinerPipe implements PipeTransform {

  transform(arr: string[], separator: any = ", "): string {
    return arr ? arr.join(separator) : arr;
  }

}
