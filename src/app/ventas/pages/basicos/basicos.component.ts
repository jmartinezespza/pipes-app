import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string = "jhonny"
  nombreUpper:string = "JHONNY"
  nombreCompleto:string = "jHonNy MartíNEZ espinoza"

  fecha: Date = new Date(); // el dia de hoy

}
