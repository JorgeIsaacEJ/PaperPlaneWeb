import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/index/index.component'
import { HomeComponent } from './views/home/home.component';
import { NavBarViewComponent } from './views/navbar/view/view.component';
import { FoooterViewComponent } from './views/footer/view/view.component';

export const routes: Routes = [
    {
        path: '', redirectTo:'login', pathMatch:'full'
    },
    {
        path: 'login', component:LoginComponent,
        children:[
            {path: 'navbar/view', component:NavBarViewComponent},
            {path: 'footer/view', component:FoooterViewComponent}
        ]
    },
    {
        path: 'home', 
        loadComponent: () => import('./views/home/home.component').then((c) => c.HomeComponent)
    },
    //CLIENTES SERVICIOS
    {
        path: 'clientsservices/index', 
        loadComponent: () => import('./views/clientsservices/index/index.component').then((c) => c.ClientsservicesIndexComponent)
        //loadChildren: () => import('./views/navbar/view/view.component').then((x) => x.NavBarViewComponent)
    },
    {
        path: 'clientsservices/create',
        loadComponent: () => import('./views/clientsservices/create/create.component').then((c) => c.ClientsservicesServiceCreateComponent)
    },
    {
        path: 'clientsservices/:PpcsId/edit',
        loadComponent: () => import('./views/clientsservices/edit/edit.component').then((c) => c.ClientsservicesServiceEditComponent)
    },
    {
        path: 'clientsservices/:PpcsId/view',
        loadComponent: () => import('./views/clientsservices/view/view.component').then((c) => c.ClientsservicesServiceViewComponent)
    }
];
