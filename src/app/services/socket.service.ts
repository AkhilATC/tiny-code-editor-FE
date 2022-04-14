import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }
  // emit event
	fetchMovies() {
    console.log("Fetch")
		this.socket.emit('tiny_code');
	} 

	// listen event
	OnFetchMovies() {
    console.log("listen....");
		return this.socket.fromEvent('tiny_code');
	}
}
