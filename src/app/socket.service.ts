import {Injectable, ViewChild} from '@angular/core';
import {Socket} from "ngx-socket-io";
import {DataService} from "./data.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket, private data: DataService, private http: HttpClient) {}

 listen(event: string) {
   this.socket.on(event, (data) => {
     console.log('Event: ', event, ' Data: ', data);
     if (data === true) {
       this.http.get('http://localhost:8080/users').toPromise().then((res: any) => {
         this.data.userlist = res.userList;
       }).catch((err) => {
         console.log(err);
       });
     }
   })
  }

  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }

}

