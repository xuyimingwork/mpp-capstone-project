import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productOrder'
})
export class ProductOrderPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
