import {Injectable} from '@angular/core';
import {User} from '../../../server/model/user';
import {EventHandlersService} from "./event-handlers.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // alert array for active arrays
  public alert: string[] = [];

  // userlist which get field after a http request
  public userlist: User[];

  // helping variable which is true, if the user is logged in
  public loggedIn = false;

  // helping variable which stores the user which is logged in
  public loggedUser: User;

  // helping variable which saves the user who is to be edited
  public editUser: User;

  // helping variable which saves the user who is to be deleted
  public deleteUser: User;

  constructor(private http: HttpClient) {
  }

  updatelist(): void {

  }
}

