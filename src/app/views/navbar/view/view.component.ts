import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pages } from '../../../Interfaces/login';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbarview',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class NavBarViewComponent {
  menuActive: boolean = false;
  form!:FormGroup;
  pages: Pages[]=[];
  page: string = "";

  constructor(@Inject(DOCUMENT) private document: Document,
              public router: Router){
    const localStorage = document.defaultView?.localStorage;

    if (localStorage) {
      const counter = localStorage.getItem('paperaccess');
      if (counter) {
        Object.keys(JSON.parse(counter)).map(key => ({type: key, value: JSON.parse(counter)[key]}))[1].value.forEach((element: Pages) => {
          //Solo pagina principal * Solo la que tiene nombre de pagina
          if(element.pageName != ""){
            this.pages.push(element);
          }
        });
        this.menuActive = true;
      }
      else{
        this.menuActive = false;
        localStorage.removeItem('paperaccess');
        this.router.navigateByUrl("/login");
      }
    }
  }

  ngOnInit():void{
    this.form = new FormGroup({
      faccess: new FormControl('', [])
    });
    this.form.controls["faccess"].setValue({
      faccess: this.pages
    });
  }

  submit(){
    //Pagina seleccionada
    this.router.navigateByUrl(this.page);
  }

  LogOut(){
    this.menuActive = false;
    localStorage.removeItem('paperaccess');
    this.router.navigateByUrl("/login");
    Swal.fire('Hasta luego');
  }

}
