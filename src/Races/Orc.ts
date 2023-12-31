import Race from './Race';

export default class Orcs extends Race {
  private _maxLifePoints: number;
  private static _racesOrcsInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orcs._racesOrcsInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._racesOrcsInstances;
  }
}