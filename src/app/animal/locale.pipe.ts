import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locale',
})
export class LocalePipe implements PipeTransform {
  transform(status: string): string {
    switch (status.toLowerCase()) {
      case 'endangered':
        return 'Dang Bao Dong';
      case 'vulnerable':
        return 'Nguyen Hiem';
      case 'near threatened':
        return 'Can Quan Tam';
      case 'least concern':
        return 'Con It';
      case 'text-yellow':
        return 'Mau vang ne';
      default:
        return 'Ok';
    }
  }
}
