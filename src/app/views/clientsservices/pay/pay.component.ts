import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Clientsservicesfull } from '../../../Interfaces/clientsservicesfull';

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

  constructor(
    public dialogRef: MatDialogRef<PayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { clientsservicesfull: Clientsservicesfull }) { }

    onNoClick(): void {
      this.dialogRef.close();
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
