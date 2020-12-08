import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {

  constructor(public data: DataService, public auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.checkLogin();
  }
}
