import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cargamasiva',
  templateUrl: './cargamasiva.component.html',
  styleUrls: ['./cargamasiva.component.css']
})
export class CargamasivaComponent {
 /* private selectedFile: File | null = null;
  uploadProgress: number = 0;
  uploadMinValue: number = 0;
  uploadMaxValue: number = 100;


  constructor(private authService: AuthService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload() {
    if (this.selectedFile) {
      this.authService.uploadFile(this.selectedFile)
        .subscribe(
          response => console.log('Archivo cargado exitosamente.', response),
          error => console.error('Error al cargar el archivo.', error)
        );
    } else {
      console.log('No se ha seleccionado ningún archivo.');
    }
  }*/
}
