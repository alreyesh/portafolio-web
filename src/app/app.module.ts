import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AndroidComponent } from './pages/android/android.component';
import { WebComponent } from './pages/web/web.component';
import { ContactmeComponent } from './pages/contactme/contactme.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AndroidComponent,
    WebComponent,
    ContactmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
