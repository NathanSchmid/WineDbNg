export class Blend {
  constructor(
    public id: number,
    public name: string
  ) {}

  public static fromObjects(rawBlends: any): Blend[] {
    const blends = [];
    for (const rawBlend of rawBlends) {
      blends.push(Blend.fromObject(rawBlend));
    }
    return blends;
  }

  public static fromObject(rawBlend: any) {
    if (!rawBlend) {
      return null;
    }
    return new Blend(
      rawBlend.Id,
      rawBlend.Name
    );
  }
}
