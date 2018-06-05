import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[winedbWineColorBackground]'
})
export class WineColorBackgroundDirective {
  @Input() winedbWineColorBackground: string;

  @HostBinding('style.background-color') get backgroundColor(): string {
    switch (this.winedbWineColorBackground) {
      case 'weiss' : return '#fff9dd';
      case 'rosé' : return '#ffeedd';
      case 'rot' : return '#fcdbdb';
      default : return 'rgba(0,0,0,.03)';
    }
  }
}
