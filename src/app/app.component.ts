import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  nombre:string = 'Jhonny martinez';
  valor:number = 1000;
  obj = {
    nombre: 'Jhonny'
  }

  mostrarNombre(){
    console.log(this.nombre);
    
  }
}
