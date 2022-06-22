import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVICE = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) {}

  public sendGetRequest() {
    return this.httpClient.get<any>(this.REST_API_SERVICE);
  }
}
