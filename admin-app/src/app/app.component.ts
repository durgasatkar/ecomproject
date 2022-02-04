import { Component } from '@angular/core';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-app';
  constructor(private session: SessionService){
  }

  showMenue(): boolean{
    if(this.session.getToken()){
      return true;
    }
    return false;
  }
}
