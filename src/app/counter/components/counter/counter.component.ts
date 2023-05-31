/* Una forma rápida de crear esta plantilla es con la extensión angular snippets. Una vez instalada basta con poner a- y salen un montón de opciones para crear plantillas. En este caso hemos usado a-component y hemos editado la plantilla */


import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

  <button (click)="increaseBy(1)">+1</button> <!-- Aquí está llamando a la función de app.components.ts -->
  <button (click)="resetCounter()">Reset</button>
  <!-- <button (click)="decreaseBy(1)">-1</button> posible solución -->
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter:number = 10;

  increaseBy( value:number ): void{
    this.counter += value;
  }

  /* decreaseBy (value: number): void{
    this.counter -= value;
  } */

  resetCounter (): void {
    this.counter = 10;
  }

}
