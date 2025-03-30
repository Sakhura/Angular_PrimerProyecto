import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
 //propiedades atributos 
  welcome = 'Bienvenido a su primera aplicación en Angular';
  task = [
    'Instalar Angular Cli',
    'Crear Poryecto',
    'Crear Component',
    'Crear Servicio',
  ];
  name = 'Sabina';
  age = 50;
  disable = true;
  img = 'https://cdnx.jumpseller.com/shazam-online/image/45040948/kaiju_08_08.jpg?1706550475'


  person = {
    name: 'Sabina',
    age: 50,
    avatar: 'https://cdnx.jumpseller.com/shazam-online/image/45040948/kaiju_08_08.jpg?1706550475'
  }

  // metodos 
  clickHandler(){
    alert  ('alerta')
  }
}
