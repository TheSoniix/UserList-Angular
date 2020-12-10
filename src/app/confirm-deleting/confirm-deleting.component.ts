import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';

@Component({
  selector: 'app-confirm-deleting',
  templateUrl: './confirm-deleting.component.html',
  styleUrls: ['./confirm-deleting.component.css']
})
export class ConfirmDeletingComponent implements OnInit {
  @Input() user;
  public fname;
  constructor(public modal: NgbActiveModal, public data: DataService) { }

  ngOnInit(): void {
    this.fname = this.user.firstName;
  }

}
