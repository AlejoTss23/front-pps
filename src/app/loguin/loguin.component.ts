import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent {

 constructor(private router: Router) {}
  ngOnInit(): void {
  }
 

  iradministracion() {
 this.router.navigate(['/administracion']);
  }
  /*
 username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router:Router) { }

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      console.log('Inicio de sesión exitoso:', response);
      this.router.navigate(['administracion']);
      // Aquí puedes redirigir a otra página después del inicio de sesión exitoso
    }, error => {
      console.error('Error de inicio de sesión:', error);
    });
  
  
  }  */ 
}
