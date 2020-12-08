import {Component, OnInit} from '@angular/core';
import {EventHandlersService} from '../event-handlers.service';
import {DataService} from '../data.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  modalId: number;

  constructor(public event: EventHandlersService, public data: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    try {
      const url = this.route.snapshot.url[3].path;
      if (url === 'modal') {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
          this.modalId = Number(paramMap.get(`editID`));
          this.event.getEditUser(this.modalId).then((user) => {
            this.event.openModal(user);
          }).catch((err) => {
            console.log(err + ' kein plan mehr');
          });
        });
      }
    } catch (e) {
    }
  }


}
