import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  isLoggedIn(): boolean{
    if(this.session.getToken()){
      return true;
    }
    return false;
  }

  logout(){
    this.session.deleteToken();
    this.router.navigateByUrl("login");
  }
  constructor(private session: SessionService,
    private router: Router) { }

  ngOnInit(): void {
  }

}
