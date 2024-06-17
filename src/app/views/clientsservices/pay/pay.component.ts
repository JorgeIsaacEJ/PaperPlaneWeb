import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent {
  form!:FormGroup;
  @Output() getPayment = new EventEmitter<any>();

  constructor(){

  }

  ngOnInit(): void{
    this.form = new FormGroup({
      freferencenumber: new FormControl('', [Validators.required, Validators.minLength(4)]),
      freference: new FormControl()
    });
  }

  getClient(){

  }

  getCampaing(){

  }

  
}
