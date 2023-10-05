import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { ICharacter } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  private readonly COMPONENT: string = 'MAIN_PAGE_COMPONENT';

  constructor( private dbzService: DbzService ) {}

  public get characters(): ICharacter[] {
    /**
     * Basicamente con los corchetes estamos indicando que se
     * cree un nuevo objeto que es el que sera enviado como
     * parametro de retorno para todo aquel proceso que de
     * llamada a esta funcion.
     */
    return [...this.dbzService.characterList];
  }

  public onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  public onNewCharacter(character: ICharacter): void {
    this.dbzService.onNewCharacter(character);
  }
}
