export class Voiture {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
    public kilometer: number,
    public year: number,
    public photos: string[],
    public model: string,
    public brand: string,
    public carburant: string
  ) {}
}
