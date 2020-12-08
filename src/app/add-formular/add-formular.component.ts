import {Component, OnInit} from '@angular/core';
import {EventHandlersService} from '../event-handlers.service';

@Component({
  selector: 'app-add-formular',
  templateUrl: './add-formular.component.html',
  styleUrls: ['./add-formular.component.css']
})
export class AddFormularComponent implements OnInit {
  public firstname = '';
  public secondname = '';
  public username = '';
  public password = '';
  public description = '';

  constructor(public event: EventHandlersService) {
  }

  ngOnInit(): void {
  }

  public add(): void {
    if (
      this.firstname.trim().length > 0 &&
      this.secondname.trim().length > 0 &&
      this.username.trim().length > 0 &&
      this.password.trim().length > 0 &&
      this.description.trim().length > 0) {
      this.event.addUser(
        this.firstname,
        this.secondname,
        this.username,
        this.password,
        this.description);
      this.firstname = '';
      this.secondname = '';
      this.username = '';
      this.password = '';
      this.description = '';
    } else {
      console.log('empty inputs');
    }
  }
}
