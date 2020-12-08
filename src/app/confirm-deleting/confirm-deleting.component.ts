import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';

@Component({
  selector: 'app-confirm-deleting',
  templateUrl: './confirm-deleting.component.html',
  styleUrls: ['./confirm-deleting.component.css']
})
export class ConfirmDeletingComponent implements OnInit {

  constructor(public modal: NgbActiveModal, public data: DataService) { }

  ngOnInit(): void {
  }

}
