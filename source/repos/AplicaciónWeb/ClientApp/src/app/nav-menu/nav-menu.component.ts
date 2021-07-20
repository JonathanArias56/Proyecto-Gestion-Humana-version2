import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../service/autenticacion.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  isExpanded = false;
  isUserLoggedIn : boolean = false;
  name = '';

  constructor(public autenticacionService: AutenticacionService){

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(){
    this.isUserLoggedIn= this.autenticacionService.isUserLoggedIn();

  }
}
