export class Category {
  constructor(
    public id: number,
    public name: string,
    public color: string
  ) {}

  public static fromObjects(rawCategories: any): Category[] {
    const categories = [];
    for (const rawCategory of rawCategories) {
      categories.push(Category.fromObject(rawCategory));
    }
    return categories;
  }

  public static fromObject(rawCategory: any) {
    if (!rawCategory) {
      return null;
    }
    return new Category(
      rawCategory.Id,
      rawCategory.Name,
      rawCategory.Color
    );
  }
}
