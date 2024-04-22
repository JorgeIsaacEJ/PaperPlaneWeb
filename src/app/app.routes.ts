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
        path: 'login', component:LoginComponent
    },
    {
        path: '', component:NavBarViewComponent,
        children:[
            {path: 'home', component:HomeComponent},
            // ++++++ LAZY LOADER ++++++
            {
                path: 'clientsservices/index', 
                loadComponent: () => import('./views/clientsservices/index/index.component').then((c) => c.ClientsservicesIndexComponent)
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
            },
            //CATALOGOS
            {
                path: 'business/index', 
                loadComponent: () => import('./views/business/index/index.component').then((c) => c.BusinessIndexComponent)
            },
            {
                path: 'business/create',
                loadComponent: () => import('./views/business/create/create.component').then((c) => c.BusinessCreateComponent)
            },
            {
                path: 'business/:PpbId/edit',
                loadComponent: () => import('./views/business/edit/edit.component').then((c) => c.BusinessEditComponent)
            },
            {
                path: 'business/:PpbId/view',
                loadComponent: () => import('./views/business/view/view.component').then((c) => c.BusinessViewComponent)
            },
            {
                path: 'clients/index', 
                loadComponent: () => import('./views/clients/index/index.component').then((c) => c.ClientsIndexComponent)
            },
            {
                path: 'clients/create',
                loadComponent: () => import('./views/clients/create/create.component').then((c) => c.ClientsCreateComponent)
            },
            {
                path: 'clients/:PpcId/edit',
                loadComponent: () => import('./views/clients/edit/edit.component').then((c) => c.ClientsEditComponent)
            },
            {
                path: 'clients/:PpcId/view',
                loadComponent: () => import('./views/clients/view/view.component').then((c) => c.ClientsViewComponent)
            },
            {
                path: 'schemes/index', 
                loadComponent: () => import('./views/schemes/index/index.component').then((c) => c.SchemesIndexComponent)
            },
            {
                path: 'schemes/create',
                loadComponent: () => import('./views/schemes/create/create.component').then((c) => c.SchemesCreateComponent)
            },
            {
                path: 'schemes/:PpscId/edit',
                loadComponent: () => import('./views/schemes/edit/edit.component').then((c) => c.SchemesEditComponent)
            },
            {
                path: 'schemes/:PpscId/view',
                loadComponent: () => import('./views/schemes/view/view.component').then((c) => c.SchemesViewComponent)
            },
            {
                path: 'services/index', 
                loadComponent: () => import('./views/services/index/index.component').then((c) => c.ServicesIndexComponent)
            },
            {
                path: 'services/create',
                loadComponent: () => import('./views/services/create/create.component').then((c) => c.ServicesCreateComponent)
            },
            {
                path: 'services/:PpsId/edit',
                loadComponent: () => import('./views/services/edit/edit.component').then((c) => c.ServicesEditComponent)
            },
            {
                path: 'services/:PpsId/view',
                loadComponent: () => import('./views/services/view/view.component').then((c) => c.ServicesViewComponent)
            },
            {
                path: 'status/index', 
                loadComponent: () => import('./views/status/index/index.component').then((c) => c.StatusIndexComponent)
            },
            {
                path: 'status/create',
                loadComponent: () => import('./views/status/create/create.component').then((c) => c.StatusCreateComponent)
            },
            {
                path: 'status/PpstId/edit',
                loadComponent: () => import('./views/status/edit/edit.component').then((c) => c.StatusEditComponent)
            },
            {
                path: 'status/:PpstId/view',
                loadComponent: () => import('./views/status/view/view.component').then((c) => c.StatusViewComponent)
            }
        ]
    }
    // {
    //     path: 'login', component:LoginComponent,
    //     children:[
    //         {path: 'navbar/view', component:NavBarViewComponent},
    //         {path: 'footer/view', component:FoooterViewComponent}
    //     ]
    // },
    // {
    //     path: 'home', 
    //     loadComponent: () => import('./views/home/home.component').then((c) => c.HomeComponent)
    // },
    // //CLIENTES SERVICIOS
    // {
    //     path: 'clientsservices/index', 
    //     loadComponent: () => import('./views/clientsservices/index/index.component').then((c) => c.ClientsservicesIndexComponent)
    //     //loadChildren: () => import('./views/navbar/view/view.component').then((x) => x.NavBarViewComponent)
    // },
    // {
    //     path: 'clientsservices/create',
    //     loadComponent: () => import('./views/clientsservices/create/create.component').then((c) => c.ClientsservicesServiceCreateComponent)
    // },
    // {
    //     path: 'clientsservices/:PpcsId/edit',
    //     loadComponent: () => import('./views/clientsservices/edit/edit.component').then((c) => c.ClientsservicesServiceEditComponent)
    // },
    // {
    //     path: 'clientsservices/:PpcsId/view',
    //     loadComponent: () => import('./views/clientsservices/view/view.component').then((c) => c.ClientsservicesServiceViewComponent)
    // }
];
