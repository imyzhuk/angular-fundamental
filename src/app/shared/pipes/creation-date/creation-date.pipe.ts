import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe extends DatePipe implements PipeTransform {

  override transform(value: any): any {
    if(typeof value === "string"){
      value = new Date(value);
    }
    return super.transform(value, "dd.MM.yyyy");
  }

}
