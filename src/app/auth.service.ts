import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs'
import { Cortes } from './cortes/cortes.model';
import { Caja } from './caja/caja.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v2';  // Cambia la URL según tu backend

  constructor(private httpclient: HttpClient) {}

  // login(username: string, password: string): Observable<any> {
  //   const credentials = { username, password };
  //   return this.http.post(`${this.apiUrl}/login`, credentials);
  // }


  // guardarEnCortes(datos: Cortes): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/cortes/guardar`, datos);
  // }

  guardarEnCaja(caja: Caja): Observable<Object> {
    return this.httpclient.post(`${this.apiUrl}`, caja);
  }


  // uploadFile(file: File) {
  //   const formData: FormData = new FormData();
  //   formData.append('file', file, file.name);

  //   return this.http.post('http://localhost:8080/upload', formData);
  // }
}
