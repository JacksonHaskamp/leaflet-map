import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MapComponent } from './map/map.component';
import { MarkerListComponent } from './marker-list/marker-list.component';
import { MarkerDetailsComponent } from './marker-details/marker-details.component';
import { FooterComponent } from './footer/footer.component';

// Services
import { AuthenticationService } from './authentication.service';
import { MarkerService } from './marker.service';

// Guard
import { AuthGuard } from './auth.guard';

// Routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MapComponent,
    MarkerListComponent,
    MarkerDetailsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthenticationService, MarkerService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
