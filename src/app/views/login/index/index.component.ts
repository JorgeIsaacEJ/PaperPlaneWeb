import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../Services/login.service';
import { Login } from '../../../Interfaces/login';
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
  login: Login[] = []
  form!:FormGroup;
  email:string;
  pass:string;
  index: string;
  constructor(@Inject(DOCUMENT) document: Document,
              public loginservice: LoginService,
              public router: Router){
                
    this.email = "";
    this.pass = "";
    this.index = "";
    const localStorage = document.defaultView?.localStorage;

    if (localStorage) {
      const counter = localStorage.getItem('paperaccess');
      if (counter) {
        //Default first page
        this.router.navigateByUrl("/home");
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
      this.login = data;
      this.index = (Object.values(Object.values(this.login)[1])[0]["userPages"] != "") ? "/" + Object.values(Object.values(this.login)[1])[0]["userPages"] : "";
      let name_find = Object.keys(data).map(key => ({type: key, value: data[key]}))[0].value[0];
      let name = Object.keys(name_find).map(key => ({type: key, value: name_find[key]}))[1].value;
      if(this.index != ""){
        localStorage.setItem('paperaccess', JSON.stringify(data));
        Swal.fire('Bienvenido ' + name);
        this.router.navigateByUrl("/home");
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
