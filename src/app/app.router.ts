import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {EventsComponent} from './components/events/events.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ContactComponent} from './components/contact/contact.component';
import {NewsComponent} from "./components/news/news.component";

// import {HeaderComponent} from './components/header/header.component';
// import {FooterComponent} from './components/footer/footer.component';
// import {NavbarComponent} from './components/navigation/navbar.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'prefix'},
  // { path: '', component: WelcomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'events', component: EventsComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'news', component: NewsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
