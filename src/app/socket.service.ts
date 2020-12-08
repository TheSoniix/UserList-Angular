import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() {
  }

 /* socket = io.connect(window.location.protocol + '//' + window.location.host)
    .on('test', function () {
      console.log('nächster Versuch');
    });

  */
}
