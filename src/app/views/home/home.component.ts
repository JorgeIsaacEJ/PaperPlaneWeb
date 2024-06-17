import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarViewComponent } from '../navbar/view/view.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoginService } from '../../Services/login.service';
import { CharsService } from '../../Services/chars.service';
import { Pie } from '../../Interfaces/chars';
import { Point } from '../../Interfaces/chars';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavBarViewComponent, NgxChartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  watch: boolean = false;
  //Para cada grafica
  single:Pie[]=[];
  multi: Point[]=[];
  bar: Point[]=[];
  //Generales
  view: [number, number] = [800, 400];//Tamanio de las graficas

  // options PIE
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // options POINTS
  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Meses';
  yAxisLabel: string = 'Ventas';
  timeline: boolean = true;

  colorScheme2 = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  // options BARS
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  xAxisLabelB: string = 'Metas';
  yAxisLabelB: string = 'Ventas';
  legendTitle: string = 'Meses';

  constructor(public loginservice: LoginService, 
              public charservice: CharsService) {
  }

  ngOnInit():void{
    this.getServicesPie();
    this.getSalesPoint();
    this.getGoalsBar(2023);
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  //PIE TOTAL DE PAQUETES VENDIDOS
  getServicesPie(){
    //Valida si el usuario esta logeado
    this.loginservice.validateAccess().subscribe((data: boolean)=>{
      this.watch = data;
      this.charservice.getListServices().subscribe((data:Pie[])=>{
        this.single = data;
      })
    })
  }

  //POINT VENTAS X ANIO
  getSalesPoint(){
    //Valida si el usuario esta logeado
    this.loginservice.validateAccess().subscribe((data: boolean)=>{
      this.watch = data;
      this.charservice.getListSales().subscribe((data:Point[])=>{
        this.multi = data;
      })
    })
  }

  //POINT VENTAS X ANIO
  getGoalsBar(anio: number){
    //Valida si el usuario esta logeado
    this.loginservice.validateAccess().subscribe((data: boolean)=>{
      this.watch = data;
      this.charservice.getListGoals(anio).subscribe((data:Point[])=>{
        this.bar = data;
      })
    })
  }
  
}
