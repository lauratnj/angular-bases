import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

// Los servicios normalmente se colocan como privados. Para poder utilizarlos definimos como poder usar cada parte del servicio. Así podremos utilizarlo sin problemas en nuestro main-page.component.html. Si nos vamos al .html ya podremos usar characters, onDeleteCharacter y onNewCharacter sin necesidad de colocar delante dbzService.onNewCharacter.

export class MainPageComponent {
  constructor( private dbzService: DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter ( character: Character ):void {
    this.dbzService.addCharacter( character );
  }
}
