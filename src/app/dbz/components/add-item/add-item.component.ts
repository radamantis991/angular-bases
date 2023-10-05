import { Component, EventEmitter, Output } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { ICharacter } from '../../interfaces/character.interface';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  @Output()
  public onNewCharacter: EventEmitter<ICharacter> = new EventEmitter();

  public character: ICharacter = {
    id: '',
    name: '',
    power: 0
  }

  addCharacter(): void {
    if( this.character.name.length === 0 ) return;

    this.character.id = uuid();
    this.onNewCharacter.emit(this.character);

    this.character = { id: '', name: '', power: 0};

    /**
     * Es interesante, que al asignar los valores 1 a 1 a el objeto character
     * a la matriz se le asigne una referencia ya utilizada y no una nueva
     * referencia del nuevo objeto.
     */
    //this.character.name = '';
    //this.character.power = 0;
  }

}
