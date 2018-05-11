// import {Component, HostListener, Inject, OnInit} from '@angular/core';
// // import {WindowRef} from '../../providers/WindowRef';
// import {DOCUMENT} from '@angular/common';
//
// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
//
// export class NavbarComponent implements OnInit {
//   private projectName: string;
//   public navIsFixed: false;
//   private navbar: any;
//
//   constructor(@Inject(DOCUMENT) private document: Document) {
//     this.projectName = 'adhafrica';
//   }
//
//   ngOnInit() {
//     const navbar = document.getElementsByClassName('navbar')[0];
//     navbar.classList.add('navbar-expand');
//   }
//
//   @HostListener('window:scroll', ['$event'])
//   onWindowScroll() {
//     const number = this.document.body.scrollTop;
//     const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
//     const max = document.documentElement.scrollHeight;
//
//
//     const smallLogoHeight = document.getElementsByClassName('inner-banner');
//     //var bigLogoHeight = $('.big-logo').height();
//     const navbar = document.getElementsByClassName('navbar')[0];
//
//     console.log('Scroll position: ' + number);
//     if (number > 50) {
//       this.navIsFixed = true;
//       navbar.classList.remove('navbar-expand');
//       navbar.classList.add('navbar-shrink');
//       console.log(navbar);
//     } else if (this.navIsFixed && number < 10) {
//       this.navIsFixed = false;
//       //navbar.classList.add('navbar-expand');
//       navbar.classList.add('navbar-expand');
//       navbar.classList.remove('navbar-shrink');
//     }
//     if (pos === max) {
//       console.log('Max Scroll position reached: ' + number);
//     }
//   }
//
// }
