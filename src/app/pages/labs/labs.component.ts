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
  welcome = 'Bienvenido a su primera aplicación en Angular';
  task =[
    'Instalar Angular Cli',
    'Crear Poryecto',
    'Crear Component',
    'Crear Servicio',
  ];

}
