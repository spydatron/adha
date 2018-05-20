import {Component, HostListener, Inject, OnInit} from '@angular/core';
// import {WindowRef} from '../../providers/WindowRef';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  private projectName: string;
  public navIsFixed: false;
  private navbar: any;
  show = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.projectName = 'adhafrica';
  }

  ngOnInit() {
    const navbar = document.getElementsByClassName('navbar')[0];
    navbar.classList.add('navbar-expand');
  }

  toggleCollapse() {
    this.show = !this.show;
  }

}
