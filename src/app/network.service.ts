import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient: HttpClient) { }
  public serverUrl = environment.serverUrl;
  public sentCodeToRunServer(payload){
    let response = this.httpClient.post(`/tiny_code/run`,
      payload
      )
      return response;

  }
}
