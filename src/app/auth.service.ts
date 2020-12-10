import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import {Router} from '@angular/router';
import {EventHandlersService} from './event-handlers.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private data: DataService, private router: Router,
              private event: EventHandlersService) {
  }

  // Login function
  public login(username: string, password: string): void {
    if (username.trim().length > 0 && password.trim().length > 0) {
      this.http.post('http://localhost:8080/login', {
        username,
        password
      }).toPromise()
        .then((res: any) => {
          this.data.loggedUser = res.user;
          this.data.loggedIn = true;
          this.router.navigate(['/loggedin/user/' + res.user.id]).then();
          return this.http.get('http://localhost:8080/users').toPromise();
        })
        .then((data: any) => {
          this.data.userlist = data.userList;
          this.data.loggedIn = true;
        })
        .catch(() => {
          this.data.loggedIn = false;
        });
    } else {
      console.log('Füllen Sie das Formular aus, um sich anmelden zu können.');
    }
  }

  // Check if user is alredy logged in
  public checkLogin(): void {
    this.http.get('http://localhost:8080/login').toPromise()
      .then((res: any) => {
        this.data.loggedIn = true;
        this.data.loggedUser = res.user;
        this.event.updateUserList();
      })
      .catch(() => {
        this.data.loggedIn = false;
        this.router.navigate(['']).then();
      });

  }

  public logout(): void {
    this.http.post('http://localhost:8080/logout', {}).toPromise().then((res: any) => {
      this.data.loggedIn = false;
      this.router.navigate(['']).then();
    });
  }
}
