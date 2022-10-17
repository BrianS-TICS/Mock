import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  url = "https://634d879bf34e1ed826786d97.mockapi.io/api/usuario/usuario"

  constructor(private http : HttpClient) { }

  getUsuarios() : Observable<any> {
    return this.http.get(this.url);
  }

}
