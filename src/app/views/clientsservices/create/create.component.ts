import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientsservicesService } from '../../../Services/clientsservices.service';
import { Clientsservices } from '../../../Interfaces/clientsservices';
import { ClientsService } from '../../../Services/clients.service';
import { Clients } from '../../../Interfaces/clients';
import { ServicesService } from '../../../Services/services.service';
import { Services } from '../../../Interfaces/services';
import { SchemesService } from '../../../Services/schemes.service';
import { Schemes } from '../../../Interfaces/schemes';
import { StatusService } from '../../../Services/status.service';
import { Status } from '../../../Interfaces/status';
import { Router } from '@angular/router';
import { LoginService } from '../../../Services/login.service';

@Component({
    selector: 'app-create',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './create.component.html',
    styleUrl: './create.component.css'
})
export class ClientsservicesServiceCreateComponent {
  watch: boolean = false;
  form!:FormGroup;
  clients: Clients[] = [];
  services: Services[] = [];
  schemes: Schemes[] = [];
  status: Status[] = [];
  clientServices: Clientsservices[] = [];

  constructor(public loginservice: LoginService, 
              public clientsServicesService: ClientsservicesService, 
              private clientsServices: ClientsService, 
              private servicesService: ServicesService, 
              private schemesService: SchemesService,
              private statusService: StatusService,
              private router: Router){
  }

  ngOnInit(){
    //Valida si el usuario esta logeado
    this.loginservice.validateAccess().subscribe((data: boolean)=>{
      this.watch = data;
      this.CreateForm();
    })
  }

  submit(){
    this.form.controls['fclientservices'].setValue({
      ppcId: this.form.controls['fclients'].value,
      ppsId: this.form.controls['fservices'].value,
      ppscId: this.form.controls['fschemes'].value,
      ppstId: this.form.controls['fstatus'].value,
      ppcsPay: this.form.controls['fpay'].value,
      ppcsDatePay: this.form.controls['fpaydate'].value,
      ppcsDateCrete: new Date,
      ppcsDateUpdate: new Date
    });
    this.clientsServicesService.add(this.form.controls['fclientservices'].value).subscribe((res:any)=>{
      alert("Se creo un nuevo registro");
      this.router.navigateByUrl('/clientsservices/index');
    }, error => {
      console.error(error);
    })
  }

  get f(){
    return this.form.controls;
  }

  CreateForm(){
    this.form = new FormGroup({
      fclients: new FormControl('', [Validators.required]),
      fservices: new FormControl('', [Validators.required]),
      fschemes: new FormControl('', [Validators.required]),
      fstatus: new FormControl('', [Validators.required]),
      fpay: new FormControl('', [Validators.required]),
      fpaydate: new FormControl('', [Validators.required]),
      fclientservices: new FormControl()
    });
    this.getClients();
    this.getServices();
    this.getSchemes();
    this.getStatus();
  }

  getClients() {
    this.clientsServices.getList().subscribe((data:any)=>{
      this.clients = data;
      //this.form.controls['fclients'].setValue(data);
    }, error => {
      console.error(error);
    })
  }

  getServices() {
    this.servicesService.getList().subscribe((data:any)=>{
      this.services = data;
      //this.form.controls['fservices'].setValue(data);
    }, error => {
      console.error(error);
    })
  }

  getSchemes() {
    this.schemesService.getList().subscribe((data:any)=>{
      this.schemes = data;
      //this.form.controls['fschemes'].setValue(data);
    }, error => {
      console.error(error);
    })
  }

  getStatus() {
    this.statusService.getList().subscribe((data:any)=>{
      this.status = data;
      //this.form.controls['fstatus'].setValue(data);
    }, error => {
      console.error(error);
    })
  }
}
