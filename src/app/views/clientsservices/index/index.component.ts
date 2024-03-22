import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Clientsservices } from '../../../Interfaces/clientsservices';
import { Clientsservicesfull } from '../../../Interfaces/clientsservicesfull';
import { ClientsservicesService } from '../../../Services/clientsservices.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  clientsservices:Clientsservices[]=[];
  clientsservicesfull:Clientsservicesfull[]=[];

  constructor(public clientsservicesService:ClientsservicesService){}

  ngOnInit():void{
    this.clientsservicesService.getList().subscribe((data:Clientsservicesfull[])=>{
      this.clientsservicesfull = data;
    })
  }
}
