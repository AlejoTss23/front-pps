import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { LoguinComponent } from './loguin/loguin.component';
import { AuthService } from './auth.service';
import { AdministracionComponent } from './administracion/administracion.component';
import { RouterModule } from '@angular/router';
import { CortesComponent } from './cortes/cortes.component';
import { FormsModule } from '@angular/forms';
import { CajaComponent } from './caja/caja.component';
import { CargamasivaComponent } from './cargamasiva/cargamasiva.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VistaPrincipalComponent,
    LoguinComponent,
    AdministracionComponent,
    CortesComponent,
    CajaComponent,
    CargamasivaComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
