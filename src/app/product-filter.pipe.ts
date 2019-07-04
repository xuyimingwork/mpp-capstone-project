import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(values: any[], ...args: any[]): any {
    if (!Array.isArray(values)) {
      return [];
    }

    const [attr, op, val] = args;
    return values.filter((item) => {
      if (!(attr in item)) {
        return true;
      }

      if (op !== '=' && op !== '!=') {
        return true;
      }

      if (op === '=') {
        return item[attr] === val;
      }

      if (op === '!=') {
        return item[attr] !== val;
      }

      return true;
    });
  }
}
