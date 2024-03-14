import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value) {
    return value
      .toLowerCase()
      .split('')
      .sort((a, b) => {
        if (a > b) return 1;
        else return -1;
      })
      .join('');
  }
}
