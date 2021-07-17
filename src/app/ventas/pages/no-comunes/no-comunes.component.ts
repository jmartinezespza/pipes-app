import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre: string = "Jhonny"
  genero: string = "masculino"
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // l10nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Alex']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente() {
    this.nombre = "Jessica";
    this.genero = "femenino";
  }

  borrarCliente() {
    this.clientes.pop();
    
  }

  // keyValuePipe
  persona = {
    nombre: "Jhonny",
    edad: 31,
    direccion: "Lims, Perú"
  }

  // JsonPipe
  heroes = [
    { 
      name: 'Superman', 
      vuela: true
    },
    {
      name: 'Batman',
      vuela: false
    },
    {
      name: 'Spiderman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(2000); // 1,2,3,4,..

  valorPromesa = new Promise(resolve => {
    setTimeout(() => {
      resolve("Tenemos respuesta de la promesa");
    }, 3500);
  });
}
