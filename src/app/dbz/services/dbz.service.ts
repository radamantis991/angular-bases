import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { ICharacter } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  //Character List
  public characterList: ICharacter[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  public onNewCharacter(character: ICharacter): void {
    const newCharacter: ICharacter = {...character};
    this.characterList.push(newCharacter);
  }

  public deleteCharacterById(id: string): void {
    this.characterList = this.characterList.filter( character => character.id !== id);
  }
}
