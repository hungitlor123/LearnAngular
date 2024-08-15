import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor',
})
export class StatusColorPipe implements PipeTransform {
  transform(status: string): string {
    switch (status.toLowerCase()) {
      case 'endangered':
        return 'text-red';
      case 'vulnerable':
        return 'text-orange';
      case 'near threatened':
        return 'text-yellow';
      case 'least concern':
        return 'text-green';
      default:
        return 'text-gray';
    }
  }
}
