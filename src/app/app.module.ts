import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.router';
import {HttpModule} from '@angular/http';
// import {NavbarComponent} from './components/navigation/navbar.component';

import { AppComponent } from './app.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {EventsComponent} from './components/events/events.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ContactComponent} from './components/contact/contact.component';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {NavbarComponent} from "./components/navigation/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, routes, HttpModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
