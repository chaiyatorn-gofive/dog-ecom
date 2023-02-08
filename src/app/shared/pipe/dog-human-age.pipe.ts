import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dogHumanAge',
})
export class DogHumanAgePipe implements PipeTransform {
  transform(age: number): number {
    return age * 7;
  }
}
