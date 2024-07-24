import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { routes } from './app.router';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TformComponent } from './tform/tform.component';
import { FormsModule } from '@angular/forms';
import { HeroHomeComponent } from './hero-home/hero-home.component';

import { MapsComponent } from './maps/maps.component';

import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    NavbarComponent,
    TformComponent,
    HeroHomeComponent,

    MapsComponent,
    UserInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, routes, FormsModule, HttpClientModule],
  providers: [ [UserService], [HttpClient], [HttpClientModule]],
  bootstrap: [AppComponent],
})
export class AppModule {}
