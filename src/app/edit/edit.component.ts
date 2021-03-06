import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() user;
  public fname;

  public firstname = '';
  public secondname = '';
  public fullname;

  constructor(public activeModal: NgbActiveModal, public data: DataService) {
  }

  ngOnInit(): void {
    this.fname = this.user.firstName;
  }

  save(): void {
    if (this.firstname.trim().length > 0 && this.secondname.trim().length > 0) {
      this.fullname = [this.firstname, this.secondname];
      this.activeModal.close(this.fullname);
    }
  }

}
