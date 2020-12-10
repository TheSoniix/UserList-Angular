import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {AuthService} from "./auth.service";
import {SocketService} from "./socket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'userlist';

  constructor(public data: DataService, public auth: AuthService, public socket: SocketService) {
  }

  ngOnInit(): void {
    this.auth.checkLogin();
    this.socket.listen('socket');

  }


}
