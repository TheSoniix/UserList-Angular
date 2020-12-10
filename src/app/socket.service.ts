import {Injectable} from '@angular/core';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket;

  constructor() {
    this.socket = io('http://localhost:8080')
  }

 listen(event: string) {
    console.log('listen')
   this.socket.on(event, (data) => {
     console.log(event, data);
   })
  }

  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }

}

