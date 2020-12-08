import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public username = '';
  public password = '';

  constructor(public data: DataService, public auth: AuthService) {
  }

  ngOnInit(): void {
  }

  public loginData(): void {
    this.auth.login(this.username, this.password);
    this.username = '';
    this.password = '';
  }
}
