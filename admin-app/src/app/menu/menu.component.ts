import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private session:SessionService,private router:Router) { }
  
  logout(){
    this.session.deleteToken();
    this.router.navigateByUrl("");
  }
  ngOnInit(): void {
  }

}
