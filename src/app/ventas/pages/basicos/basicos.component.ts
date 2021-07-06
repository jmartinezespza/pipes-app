import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower:string = "jhonny"
  nombreUpper:string = "JHONNY"
  nombreCompleto:string = "jHonNy MartíNEZ espinoza"

  constructor() { }

  ngOnInit(): void {
  }

}
