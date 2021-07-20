import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { SeleccionContratacionComponent } from './seleccion-contratacion/seleccion-contratacion.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { BuscadoTalentosComponent } from './buscado-talentos/buscado-talentos.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    OrganigramaComponent,
    SeleccionContratacionComponent,
    GestionUsuariosComponent,
    BuscadoTalentosComponent,
    CapacitacionesComponent,
    NotificacionesComponent,
    LoginComponent,
    ErrorComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
  
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path:'login', component:LoginComponent},
      { path: 'home/:name', component: HomeComponent, canActivate: [RouteGuardService] },
      { path: 'capacitaciones', component: CapacitacionesComponent, canActivate: [RouteGuardService] },
      { path: 'notificaciones', component: NotificacionesComponent, canActivate: [RouteGuardService]},
      { path: 'organigrama', component: OrganigramaComponent, canActivate: [RouteGuardService] },
      { path: 'seleccion_contratacion', component: SeleccionContratacionComponent, canActivate: [RouteGuardService] },
      { path: 'gestion_usuarios', component: GestionUsuariosComponent, canActivate: [RouteGuardService] },
      { path: 'buscador_talentos', component: BuscadoTalentosComponent, canActivate: [RouteGuardService] },
      { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
      { path: '**', component: ErrorComponent },
      
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
