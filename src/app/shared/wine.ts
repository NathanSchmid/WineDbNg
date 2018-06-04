import { Producer } from './producer';
import { Bottle } from './bottle';

export class Wine {
  constructor(
    public id: number,
    public name: string,
    public blendId?: number,
    public categoryId?: number,
    public vintage?: number,
    public description?: string,
    public price?: number,
    public alcohol?: number,
    public oaked?: boolean,
    public labelFileName?: string,
    public goodFrom?: number,
    public goodTo?: number,
    public producerId?: number,
    public producer?: Producer,
    public bottles?: Bottle[]
  ) {}

  public static fromObjects(rawWines: any): Wine[] {
    const wines = [];
    for (const rawWine of rawWines) {
      wines.push(Wine.fromObject(rawWine));
    }
    return wines;
  }

  public static fromObject(rawWine: any): Wine {
    if (!rawWine) {
      return null;
    }
    return new Wine(rawWine.Id,
      rawWine.Name,
      rawWine.BlendId,
      rawWine.CategoryId,
      rawWine.Vintage,
      rawWine.Description,
      rawWine.Price,
      rawWine.Alcohol,
      rawWine.Oaked,
      rawWine.LabelFileName,
      rawWine.GoodFrom,
      rawWine.GoodTo,
      rawWine.ProducerId,
      Producer.fromObject(rawWine.Producer),
      Bottle.fromObjects(rawWine.Bottles)
    );
  }
}
