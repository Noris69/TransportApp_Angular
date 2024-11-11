import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { envorinment } from '../environment/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavigationAdminComponent } from './shared/navigation/navigation-admin/navigation-admin.component';
import { NavigationUserComponent } from './shared/navigation/navigation-user/navigation-user.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './shared/services/auth.service';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    NavigationAdminComponent,
    NavigationUserComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(envorinment.firebase),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(envorinment.firebase)),
    provideAuth(() => getAuth()),
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
