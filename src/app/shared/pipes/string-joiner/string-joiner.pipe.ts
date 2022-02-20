import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner'
})
export class StringJoinerPipe implements PipeTransform {

  transform(arr: string[], separator: any = ", "): string {
    return arr.join(separator);
  }

}
