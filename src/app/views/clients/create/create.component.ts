import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Clients } from '../../../Interfaces/clients';
import { Router } from '@angular/router';
import { ClientsService } from '../../../Services/clients.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form!:FormGroup;
  clients: Clients[] = [];

  constructor(
    private clientsServices: ClientsService, 
    private router: Router){

  }

  ngOnInit(){
    
  }

  CreateForm(){
    this.form = new FormGroup({
      PpcId: new FormControl('', [Validators.required]),
      PpbId: new FormControl('', [Validators.required]),
      PpcName: new FormControl('', [Validators.required]),
      PpstId: new FormControl('', [Validators.required])
    });
  }
}
