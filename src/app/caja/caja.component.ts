import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Caja } from './caja.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
  caja : Caja = new Caja();
  constructor(private authService:AuthService, private router:Router ){}
  ngOnInit(): void {
    
  }
  guardarEmpleado(){
    this.authService.guardarEnCaja(this.caja).subscribe(dato =>{
      console.log(dato)
    });
    ;
  }
  
  guardarEnCaja(){
    console.log(this.caja);
  }
  // numeroTropa: number = 0;
  // fechaFaena!: number;
  // fechaVencimiento!: number;
  // procedencia!: string;
  // tipoCorte!: string;
  // pesoNeto!: number;
  // codigoQR!: number;
  // codigoBarras:number = 0;
  // constructor() { }

  // guardarEnCaja() {
  //   const datos: Caja = {
  //     numeroTropa: 0,
  //     fechaFaena: 0,
  //     fechaVencimiento: 0,
  //     procedencia: '',
  //     tipoCorte: '',
  //     pesoNeto:0 ,
  //     codigoQR: 0,
  //     codigoBarras:0
  //   }

   /* this.authService.guardarEnCaja(datos).subscribe(response => {
      console.log('Datos guardados en Caja:', response);
    });
   } */
}
