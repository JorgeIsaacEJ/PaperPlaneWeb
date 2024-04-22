import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Clientsservices } from '../../../Interfaces/clientsservices';
import { Clientsservicesfull } from '../../../Interfaces/clientsservicesfull';
import { ClientsservicesService } from '../../../Services/clientsservices.service';
import { LoginService } from '../../../Services/login.service';

@Component({
    selector: 'app-index',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './index.component.html',
    styleUrl: './index.component.css'
})
export class ClientsservicesIndexComponent {
  watch: boolean = false;
  clientsservices:Clientsservices[]=[];
  clientsservicesfull:Clientsservicesfull[]=[];

  constructor(public loginservice: LoginService, 
              public clientsservicesService:ClientsservicesService){}

  ngOnInit():void{
    //Valida si el usuario esta logeado
    this.loginservice.validateAccess().subscribe((data: boolean)=>{
      this.watch = data;
      this.clientsservicesService.getList().subscribe((data:Clientsservicesfull[])=>{
        this.clientsservicesfull = data;
      })
    })
  }
}
