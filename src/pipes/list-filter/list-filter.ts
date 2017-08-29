import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ListFilterPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'list-filter',
})
export class ListFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  // transform(items: any[], field: string, value: string): any[] {
  //   if (!items) return [];
  //   return items.filter(it => it[field] == value);
  // }
  transform(items: Array<any>, keyword: string): Array<any> {
    console.log(keyword);
    return items.filter(item => item.name === keyword);
  }
}
