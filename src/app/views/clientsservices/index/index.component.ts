import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Clientsservices } from '../../../Interfaces/clientsservices';
import { Clientsservicesfull } from '../../../Interfaces/clientsservicesfull';
import { ClientsservicesService } from '../../../Services/clientsservices.service';
import { LoginService } from '../../../Services/login.service';
import { PayComponent } from '../pay/pay.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-index',
    standalone: true,
    imports: [CommonModule, RouterModule, PayComponent],
    templateUrl: './index.component.html',
    styleUrl: './index.component.css'
})
export class ClientsservicesIndexComponent {
  watch: boolean = false;
  clientsservices:Clientsservices[]=[];
  clientsservicesfull:Clientsservicesfull[]=[];

  @ViewChild('paymentReference') paymentReference!: ElementRef;
  @ViewChild('paymentModal') paymentModal!: ElementRef;

  constructor(public loginservice: LoginService, 
              public clientsservicesService:ClientsservicesService,
              public dialog: MatDialog){}

  ngOnInit():void{
    //Valida si el usuario esta logeado
    this.loginservice.validateAccess().subscribe((data: boolean)=>{
      this.watch = data;
      this.clientsservicesService.getList().subscribe((data:Clientsservicesfull[])=>{
        this.clientsservicesfull = data;
      })
    })
  }

  openDialog(ppc_id: number): void {
    const selectedService = this.clientsservicesfull.find(service => service.ppc_id === ppc_id);
    const dialogRef = this.dialog.open(PayComponent, {
      width: '800px',
      data: { clientsservicesfull: selectedService }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo de pago se cerró');
      // Puedes manejar los resultados del diálogo aquí
    });
  }

  PaymentRegister(event: any):void{
    let paymentreference = this.paymentReference.nativeElement.value;
    const referenceModal: HTMLElement = this.paymentReference.nativeElement;
  }

  @HostListener(
    'document:keydown.escape', ['$event']
  ) onKeydownHandler( e: any ) {

    const paymentModal: HTMLElement = this.paymentModal.nativeElement;
    if ( paymentModal && paymentModal.classList.contains('payment-modal-active') ) {
      this.closePaymentModal();
    }
  }

  closePaymentModal(): void {
    const modal: HTMLElement = this.paymentModal.nativeElement;
    setTimeout(() => {
      modal.classList.remove('show');
      modal.classList.remove('payment-modal-active');
      modal.classList.add('payment-modal-hide');
    }, 301 );
  }
}
