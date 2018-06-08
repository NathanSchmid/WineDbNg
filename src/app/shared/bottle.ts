import { State } from './state';

export class Bottle {
    constructor(
      public code: string,
      public size?: number,
      public state?: State,
      public checkin?: Date,
      public checkout?: Date,
      public rating?: number
    ) {}

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
        State.fromObject(rawBottle.State),
        rawBottle.Checkin,
        rawBottle.Checkout,
        rawBottle.Rating
      );
    }
}
