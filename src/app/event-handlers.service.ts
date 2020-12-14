import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditComponent} from './edit/edit.component';
import {DataService} from './data.service';
import {User} from '../../../server/model/user';
import {Location} from '@angular/common';
import {ConfirmDeletingComponent} from './confirm-deleting/confirm-deleting.component';
import {SocketService} from "./socket.service";

@Injectable({
  providedIn: 'root'
})
export class EventHandlersService {

  constructor(private http: HttpClient, private modalService: NgbModal, private data: DataService,
              private location: Location, private socket: SocketService) {
  }

  public addUser(
    firstname: string,
    secondname: string,
    username: string,
    password: string,
    description: string
  ): void {
    this.http.post('http://localhost:8080/user', {
      firstName: firstname,
      lastName: secondname,
      username,
      password,
      description
    }).toPromise().then(() => {
      this.data.alert.push('User erfolgreich erstellt');
      setTimeout(() => this.data.alert.splice(0,1), 5000);
      this.updateUserList();
      this.socket.emit('update', {});
    }).catch((err) => {
      console.log(err);
    });
  }

  public async delete(user: User): Promise<void> {
    const deleteModal = this.modalService.open(ConfirmDeletingComponent);
    deleteModal.componentInstance.user = user;
    this.data.deleteUser = user;
    try {
      const wantDelete: boolean = await deleteModal.result;
      if (wantDelete) {
        this.data.alert.push('User erfolgreich gelöscht');
        setTimeout(() => this.data.alert.splice(0,1), 5000);
        this.http.delete('http://localhost:8080/user/' + user.id).toPromise().then(() => {
          this.updateUserList();
          this.socket.emit('update', {});
        });
      }
    } catch (e) {
      console.log(e);
    }

  }

  public async openModal(user: User): Promise<void> {
    this.location.go('/loggedin/user/' + this.data.loggedUser.id + '/modal/' + user.id);
    const modal = this.modalService.open(EditComponent);
    modal.componentInstance.user = user;
    try {
      this.data.editUser = user;
      const fullname = await modal.result;
      this.editUser(fullname[0], fullname[1], user.id);
      this.updateUserList();
      this.location.replaceState('/loggedin/user/' + this.data.loggedUser.id);
      this.socket.emit('update', {});
    } catch (e) {
      this.location.replaceState('/loggedin/user/' + this.data.loggedUser.id);
    }
  }

  public editUser(firstName: string, lastName: string, userId: number): void {
    this.http.put('http://localhost:8080/user/' + userId, {
      firstName,
      lastName
    }).toPromise().then()
      .catch((err) => {
      console.log(err);
    });
  }

  public updateUserList(): void {
    this.http.get('http://localhost:8080/users').toPromise().then((res: any) => {
      this.data.userlist = res.userList;
    }).catch((err) => {
      console.log(err);
    });
  }

  public getEditUser(userId: number): Promise<User> {
    return this.http.get('http://localhost:8080/user/' + userId).toPromise().then((res: any) => {
      this.data.editUser = res.user;
      return res.user;
    }).catch((err) => {
      console.log(err);
    });
  }
}



