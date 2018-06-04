export class Producer {
  constructor(
    public id: number,
    public name: string,
    public place?: string,
    public country?: string,
    public url?: string,
    public longitude?: number,
    public latitude?: number
  ) {}

  public static fromObjects(rawProducers: any): Producer[] {
    const producers = [];
    for (const rawProducer of rawProducers) {
      producers.push(Producer.fromObject(rawProducer));
    }
    return producers;
  }

  public static fromObject(rawProducer: any): Producer {
    if (!rawProducer) {
      return null;
    }
    return new Producer(rawProducer.Id,
      rawProducer.Name,
      rawProducer.Place,
      rawProducer.Country,
      rawProducer.Url,
      rawProducer.Longitude,
      rawProducer.Latitude);
  }
}
