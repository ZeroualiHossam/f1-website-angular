import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImagenPrincipalComponent } from './components/imagen-principal/imagen-principal.component';
import { DriverComponent } from './components/driver/driver.component';
import { InfoSportComponent } from './components/info-sport/info-sport.component';
import { DriverPageComponent } from './components/driver-page/driver-page.component';
import { ClasificationPageComponent } from './components/clasification-page/clasification-page.component';
import { ClasificationComponent } from './components/clasification/clasification.component';
import { ClasificationTeamsComponent } from './components/clasification-teams/clasification-teams.component';
import { ClasificationTeamsPageComponent } from './components/clasification-teams-page/clasification-teams-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagenPrincipalComponent,
    DriverComponent,
    InfoSportComponent,
    DriverPageComponent,
    ClasificationPageComponent,
    ClasificationComponent,
    ClasificationTeamsComponent,
    ClasificationTeamsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
