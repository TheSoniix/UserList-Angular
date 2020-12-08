import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  @Input() message: string;

  constructor(public data: DataService) {
  }

  ngOnInit(): void {
  }

  public close(): void {
    this.data.alert.splice(0,1);
  }

}
