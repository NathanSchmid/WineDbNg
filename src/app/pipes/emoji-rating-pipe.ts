import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'emojirating' })
export class EmojiRatingPipe implements PipeTransform {
  transform(value: number, args: string[]): any {
    if (!value) {
      return value;
    }
    if (value <= 1.0) {
      return String.fromCodePoint(0x1F616);
    } else if (value <= 2.0) {
      return String.fromCodePoint(0x2639);
    } else if (value <= 3.0) {
      return String.fromCodePoint(0x1F641);
    } else if (value <= 4.0) {
      return String.fromCodePoint(0x1F610);
    } else if (value <= 5.0) {
      return String.fromCodePoint(0x1F60A);
    } else {
      return String.fromCodePoint(0x1F60D);
    }
  }
}
