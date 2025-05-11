import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
 
    return `Length of ${value} is ${value.length}`;
  }

}
