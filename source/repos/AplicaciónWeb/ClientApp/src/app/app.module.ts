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
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'capacitaciones', component: CapacitacionesComponent },
      { path: 'notificaciones', component: NotificacionesComponent },
      { path: 'organigrama', component: OrganigramaComponent },
      { path: 'seleccion_contratacion', component: SeleccionContratacionComponent },
      { path: 'gestion_usuarios', component: GestionUsuariosComponent },
      { path: 'buscador_talentos', component: BuscadoTalentosComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
