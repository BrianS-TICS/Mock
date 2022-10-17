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
  constructor(private _mockService : MockService){
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._mockService.getUsuarios().subscribe(data => {
      this.nombre = data[0].name;
      this.avatar = data[0].avatar;
      this.createdAt = data[0].createdAt;
      this.id = data[0].id;
    });
  }
}
