import { Component } from '@angular/core';
import { MockService } from './services/mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nombre = "";
  avatar = "";
  id = 0;
  createdAt = "";

  personas: any = [];
  constructor(private _mockService : MockService){
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._mockService.getUsuarios().subscribe(data => {
      this.personas = data;
    });
  }
}
