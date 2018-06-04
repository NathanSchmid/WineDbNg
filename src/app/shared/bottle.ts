export class Bottle {
  public readonly emojiRating: string;
    constructor(
      public code: string,
      public size?: number,
      public stateId?: number,
      public checkin?: Date,
      public checkout?: Date,
      public rating?: number
    ) {
      if (rating) {
        if (rating <= 1.0) {
          this.emojiRating = String.fromCodePoint(0x1F616);
        } else  if (rating <= 2.0) {
          this.emojiRating = String.fromCodePoint(0x2639);
        } else  if (rating <= 3.0) {
          this.emojiRating = String.fromCodePoint(0x1F641);
        } else  if (rating <= 4.0) {
          this.emojiRating = String.fromCodePoint(0x1F610);
        } else  if (rating <= 5.0) {
          this.emojiRating = String.fromCodePoint(0x1F60A);
        } else  if (rating <= 6.0) {
          this.emojiRating = String.fromCodePoint(0x1F60D);
        }
      }
    }

    public static fromObjects(rawBottles: any): Bottle[] {
      const bottles = [];
      if (!rawBottles) {
        return bottles;
      }
      for (const rawBottle of rawBottles) {
        bottles.push(Bottle.fromObject(rawBottle));
      }
      return bottles;
    }

    public static fromObject(rawBottle: any): Bottle {
      if (!rawBottle) {
        return null;
      }
      return new Bottle(rawBottle.Code,
        rawBottle.Size,
        rawBottle.StateId,
        rawBottle.Checkin,
        rawBottle.Checkout,
        rawBottle.Rating
      );
    }
}
