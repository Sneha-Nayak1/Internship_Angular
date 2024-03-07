import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const price=args[0];
    const val=args[1];
    return value+price*val; /* 3,2,4=> 3+2*4 */
  }

}
