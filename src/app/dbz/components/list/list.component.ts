import { Component, EventEmitter, Input, Output } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: ICharacter[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete= new EventEmitter<string>();

  public onDeleteCharacter(id: string): void{
    this.onDelete.emit(id);
  }
}
