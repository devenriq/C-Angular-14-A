import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  value:string=''
  text:string=''
  seleccionado:string=''
  monedas:string[]=['USD', 'EU']

  monto: number = 0

  valores:any[]=[
    {
      "apellido": "Arcila",
      "casado": false,
      "direccion": "Calle 35#3426",
      "nombre": "Diego",
      "telefono": 34566311
    },
    {
      "apellido": "Bueno",
      "casado": false,
      "direccion": "Calle 26A#5626",
      "nombre": "Alejandra",
      "telefono": 6666666
    },
    {
      "apellido": "Palomino",
      "casado": false,
      "direccion": "Calle 3$6$426",
      "nombre": "Natalia",
      "telefono": 938411211
    }
  ]
}
