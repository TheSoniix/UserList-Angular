import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public firstname = '';
  public secondname = '';
  public fullname;

  constructor(public activeModal: NgbActiveModal, public data: DataService) {
  }

  ngOnInit(): void {
  }

  save(): void {
    if (this.firstname.trim().length > 0 && this.secondname.trim().length > 0) {
      this.fullname = [this.firstname, this.secondname];
      this.activeModal.close(this.fullname);
    }
  }

}
