import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusColorPipe } from './custom.pipe';
import { LocalePipe } from './locale.pipe';

@NgModule({
  declarations: [StatusColorPipe, LocalePipe],
  imports: [CommonModule],
  exports: [StatusColorPipe, LocalePipe],
  providers: [],
})
export class PipeModule {}
