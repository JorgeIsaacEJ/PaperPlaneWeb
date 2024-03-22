import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../Services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class LoginComponent {
  form!:FormGroup;
  email:string;
  pass:string;
  index: string;
  constructor(public loginservice: LoginService,
              public router: Router){
                
    this.email = "";
    this.pass = "";
    this.index = "";
    const localStorage = document.defaultView?.localStorage;

    if (localStorage) {
      const counter = localStorage.getItem('paperaccess');
      if (counter) {
        this.router.navigateByUrl("/" + Object.keys(JSON.parse(counter)).map(key => ({type: key, value: JSON.parse(counter)[key]}))[1].value[0]);
      }
      else{
        //localStorage.removeItem('paperaccess');
      }
    }
  }

  ngOnInit():void{
    this.form = new FormGroup({
      femail: new FormControl('', [Validators.required]),
      fpass: new FormControl('', [Validators.required])
    });
  }

  getLogin() {
    this.loginservice.get(this.form.controls['femail'].value, this.form.controls['fpass'].value).subscribe((data:any)=>{
      this.index = (Object.keys(data).map(key => ({type: key, value: data[key]}))[1].value[0] != "") ? "/" + Object.keys(data).map(key => ({type: key, value: data[key]}))[1].value[0] : "";
      let name_find = Object.keys(data).map(key => ({type: key, value: data[key]}))[0].value[0];
      let name = Object.keys(name_find).map(key => ({type: key, value: name_find[key]}))[1].value;
      if(this.index != ""){
        localStorage.setItem('paperaccess', JSON.stringify(data));
        Swal.fire('Bienvenido ' + name);
        this.router.navigateByUrl("/" + this.index);
      }
      else{
        Swal.fire('Usuario o contraseña incorrectos por favor verifique');
      }
    }, error => {
      console.error(error);
    })
  }

  get f(){
    return this.form.controls;
  }

}
